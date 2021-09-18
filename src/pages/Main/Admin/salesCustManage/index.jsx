import React, {Component} from 'react';
import {get, post} from 'libs/request';
import moment from 'moment';
import {Form, Input, Button, Table, Divider} from 'antd';
import {toString, getUniqKey, formatDate, toMap, saveBlob} from 'libs/util';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableLoading: false, // 表格数据加载状态
      data: [],
    };
    this.formRef = React.createRef();
    this.defParam = {pageNo: 1, pageSize: 10, name: ''}; // 默认查询参数
    this.formParam = {}; // 表单上的查询参数
  }

  componentWillMount() {
      if(sessionStorage.getItem("login") !== "1"){
        this.props.history.replace('/Login');
      }
    }

  componentDidMount() {
    this.query();
  }

  query(param) {
    this.setState({tableLoading: true});
    post({
      url: 'report/salesCustQuery',
      param: {...this.defParam, ...this.formParam, ...param},
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
    this.defParam = {pageNo: 1, pageSize: 10, name: ''};
    this.formParam = {}
    this.query();
  }


  render() {
    let {tableLoading, data, pageNo, pageSize, totalCnt} = this.state;

    return <div className="mygl">

      <Form
        ref={this.formRef}
        layout="inline"
        onFinish={form => {
          this.defParam = {...this.defParam, pageNo: 1};
        this.formParam = {
          ...form
        };
          this.query();
        }}
      >
        <Form.Item label="销售姓名" name="name">
        <Input placeholder="请输入关键字" allowClear autoComplete="off"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">查询</Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={this.reset}>重置</Button>
        </Form.Item>

      </Form>
      <Divider />

      <Table
        loading={tableLoading}
        bordered
        dataSource={data}
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
        scroll={{y: 650}}
        columns={[
          {
            title: '销售员姓名',
            dataIndex: 'salesNickName',
            align: 'center',
            // fixed: 'left',
            width: 100,
            render: (text, record) => !text ? '  -' : text
          }, {
            title: '销售员手机号',
            dataIndex: 'salesMobile',
            align: 'center',
            // fixed: 'left',
            width: 100,
            render: (text, record) => !text ? '  -' : text
          },
          {
            title: '客户昵称',
            dataIndex: 'custNickName',
            align: 'center',
            // fixed: 'left',
            width: 100
          },
          {
               title: '客户手机号',
               dataIndex: 'custMobile',
               align: 'center',
               // fixed: 'left',
               width: 100
           },
           {
              title: '是否有效',
              dataIndex: 'isValid',
              align: 'center',
              // fixed: 'left',
              width: 100
          },
          {
            title: '用户创建时间',
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
