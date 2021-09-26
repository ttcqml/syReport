import React, {Component} from 'react';
import {get, post} from 'libs/request';
import moment from 'moment';
import {Form, Input, Button, Table, Divider, DatePicker, Select} from 'antd';
import {toString, getUniqKey, formatDate, toMap, saveBlob} from 'libs/util';
import TableDetail from "./tabledetail";
const {RangePicker} = DatePicker;


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableLoading: false, // 表格数据加载状态
      data: [],
      orgList: [],
    };
    this.formRef = React.createRef();
    this.defParam = {pageNo: 1, pageSize: 10, name: ''}; // 默认查询参数
    this.defaultTime = {
      startTime: formatDate(new Date(new Date().setDate((new Date().getDate() - 7))), "yyyy-MM-dd"),
      endTime: formatDate(new Date(new Date()), "yyyy-MM-dd")
    }
    this.formParam = {}; // 表单上的查询参数
  }

  componentWillMount() {
      if(sessionStorage.getItem("login") !== "1"){
        this.props.history.replace('/Login');
      }
    }

  componentDidMount() {
    this.getOrgName();
    this.query();
  }

  getOrgName(){ //获取店铺集合
      post({
        url: 'report/getOrgName',
        param: {},
      }).then(d => {
        if(d){
          this.setState({
            orgList: d
          })
        }
      })
    }

  query(param) {
    this.setState({tableLoading: true});
    post({
      url: 'report/yufaOrderRecord',
      param: {...this.defParam, ...this.defaultTime, ...this.formParam, ...param},
    }).then(d => {
      if (!d) return;
      d.data.map((item, index) => item.rowKey = index);
      this.setState({
        tableLoading: false,
        ...d
      })
    })
  }

  reset = e => { // 重置查询表单
    this.formRef.current.resetFields();
    this.defParam = {pageNo: 1, pageSize: 10, name: '', startTime: '', endTime: '', channel:'', refundState: ''};
    this.formParam = {}
    this.query();
  }

  exportDtl = e => {
    post({
      url: 'report/export',
      responseType: 'blob',
      param: {...this.defParam, ...this.defaultTime, ...this.formParam},
    }).then(d => {
      saveBlob(d);
    })
  }

  render() {
    let {tableLoading, data, pageNo, pageSize, totalCnt, orgList} = this.state;

    return <div className="mygl">

      <Form
        ref={this.formRef}
        layout="inline"
        onFinish={form => {
          this.defParam = {...this.defParam, pageNo: 1};
          if (form.time) {
            this.formParam = {
              startTime: moment(form.time[0]).format('YYYY-MM-DD'),
              endTime: moment(form.time[1]).format('YYYY-MM-DD') ,
              ...form
            };
          }
          this.query();
        }}
        initialValues={{
          time: [moment(new Date(new Date().setDate((new Date().getDate() - 7))), 'YYYY-MM-DD'), moment(new Date(), 'YYYY-MM-DD')],
          kdtName: ""
        }}
      >
        <Form.Item label="销售姓名" name="name">
            <Input placeholder="请输入关键字" allowClear autoComplete="off"/>
        </Form.Item>
        <Form.Item label="店铺" name="kdtName" style={{width: 180}}>
          <Select>
            <Select.Option value="">全部</Select.Option>
            {
              orgList && orgList.map((item,index)=>{
                return <Select.Option key={index} value={item}>{item}</Select.Option>
              })
            }
          </Select>
        </Form.Item>
        <Form.Item label="订单渠道" name="channel" initialValue={""} style={{width: 180}}>
          <Select>
            <Select.Option value="">全部</Select.Option>
            <Select.Option value="1">有赞</Select.Option>
            <Select.Option value="2">天猫</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="退款状态" name="refundState" initialValue={""} style={{width: 180}}>
          <Select>
            <Select.Option value="">全部</Select.Option>
            <Select.Option value="0">未退款</Select.Option>
            <Select.Option value="2">部分退款</Select.Option>
            <Select.Option value="12">全额退款</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="订单时间" name="time">
          <RangePicker format="YYYY-MM-DD"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">查询</Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={this.reset}>重置</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" disabled={!data || data.length <= 0} style={{marginLeft: 20}}
                  onClick={this.exportDtl.bind(this)}>导出Excel</Button>
        </Form.Item>
      </Form>
      <Divider />

      <Table
        loading={tableLoading}
        bordered
        dataSource={data}
        defaultExpandedRowKeys={[0]}
        expandedRowRender={(record) => {
            return <TableDetail data={record.orderDetailVos || []}/>
        }}
        rowKey="rowKey"
        onChange={ p => {
          this.defParam = {...this.defParam, pageNo: p.current, pageSize: p.pageSize};
          this.query();
        }}
        pagination={{
          current: pageNo,
          pageSize,
          total: totalCnt,
          showTotal: total => `共 ${total} 条`,
          showQuickJumper: true
        }}
        scroll={{x: 3000, y: 650}}
        columns={[
          {
            title: '一级销售员手机号',
            dataIndex: 'superiorSalesMobile',
            align: 'center',
            // fixed: 'left',
            width: 100,
            render: (text, record) => !text ? '  -' : text
          }, {
            title: '一级销售员姓名',
            dataIndex: 'superiorSsalesNickName',
            align: 'center',
            // fixed: 'left',
            width: 100,
            render: (text, record) => !text ? '  -' : text
          }, {
            title: '二级销售员手机号',
            dataIndex: 'salesMobile',
            align: 'center',
            // fixed: 'left',
            width: 100
          },
          {
            title: '二级销售员姓名',
            dataIndex: 'salesNickName',
            align: 'center',
            // fixed: 'left',
            width: 100
          },

          {
            title: '店铺名称',
            dataIndex: 'name',
            align: 'center',
            width: 100
          },
          {
            title: '店铺ID',
            dataIndex: 'kdtId',
            align: 'center',
            width: 100
          },
          {
            title: '全渠道会员id',
            dataIndex: 'yzOpenId',
            align: 'center',
            width: 100
          },
          {
            title: '会员手机号',
            dataIndex: 'custMobile',
            align: 'center',
            width: 100
          },
          {
            title: '会员姓名',
            dataIndex: 'custNickName',
            align: 'center',
            width: 100
          },
          {
            title: '订单号',
            dataIndex: 'orderNo',
            align: 'center',
            width: 100
          },
          {
              title: '订单状态',
              dataIndex: 'orderStatus',
              align: 'center',
              width: 100
            },
          {
            title: '订单渠道',
            dataIndex: 'orderChannel',
            align: 'center',
            width: 100
          },
            {
                title: '下单店铺',
                dataIndex: 'orderKdtName',
                align: 'center',
                width: 100
            },
            {
                title: '是否B店首单',
                dataIndex: 'isFirstOrder',
                align: 'center',
                width: 100
            },
          {
            title: '订单创建时间',
            dataIndex: 'created',
            align: 'center',
            width: 100,
            render: (text, record) => !text ? '  -' : formatDate(new Date(text), "yyyy-MM-dd hh:mm:ss")
          },
          {
            title: '订单支付金额',
            dataIndex: 'payment',
            align: 'center',
            width: 100
          },
          {
            title: '订单退款状态',
            dataIndex: 'refundState',
            align: 'center',
            width: 100
          },
          {
            title: '订单退款金额',
            dataIndex: 'refundAmount',
            align: 'center',
            width: 100,
            render: (text, record) => !text ? '  -' : text
          },
          {
            title: '订单退款时间',
            dataIndex: 'refundTime',
            align: 'center',
            width: 100,
            render: (text, record) => !text ? '  -' : formatDate(new Date(text), "yyyy-MM-dd hh:mm:ss")
          },
          {
              title: '实付金额',
              dataIndex: 'actualPayment',
              align: 'center',
              width: 100
            },
            {
                title: '是否会员订单',
                dataIndex: 'isMember',
                align: 'center',
                width: 100
            },
          {
           title: '记录时间',
           dataIndex: 'createTime',
           align: 'center',
           width: 100,
           render: (text, record) => !text ? '  -' : formatDate(new Date(text), "yyyy-MM-dd hh:mm:ss")
         }
        ]}
      />
    </div>;
  }
};
