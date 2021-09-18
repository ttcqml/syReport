import React, {Component} from 'react';
import {get, post} from 'libs/request';
import {Form, Input, Button, Table, Divider} from 'antd';
import {toString, getUniqKey, formatDate, toMap} from 'libs/util';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableLoading: false, // 表格数据加载状态
      data: [],
    };
    this.formRef = React.createRef();
    this.defParam = {pageNo: 1, pageSize: 10, keyword: ''}; // 默认查询参数
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
      url: 'report/salesperson',
      param: {...this.defParam, ...this.formParam, ...param},
    }).then(d => {
      this.setState({
        tableLoading: false,
        ...d
      })
    })
  }

  reset = e => { // 重置查询表单
    this.formRef.current.resetFields();
    this.defParam = {pageNo: 1, pageSize: 10, keyword: ''};
    this.formParam = {}
    this.query();
  }

  render() {
    let {tableLoading, data, pageNo, pageSize, totalCnt} = this.state;

    return <div className="mygl">

      <Divider />

      <Table
        loading={tableLoading}
        bordered
        dataSource={data}
        rowKey="fansId"
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
        scroll={{x: 0, y: 500}}
        columns={[
          {
            title: '邀请方手机号',
            dataIndex: 'fromBuyerMobile',
            align: 'center',
            width: 100
          },
          {
            title: '昵称',
            dataIndex: 'nickname',
            align: 'center',
            width: 100,
            ellipsis: true,
          },
          {
            title: '销售员手机号',
            dataIndex: 'mobile',
            align: 'center',
            width: 100
          },
          {
            title: '店铺编号',
            dataIndex: 'kdtId',
            align: 'center',
            width: 100
          },
          {
            title: '等级',
            dataIndex: 'level',
            align: 'center',
            width: 100
          },
          {
            title: '销售员创建时间',
            dataIndex: 'createAt',
            align: 'center',
            width: 100,
            render: (text, record) => !text ? '  -' : formatDate(new Date(text), "yyyy-MM-dd hh:mm:ss")
          },
          {
            title: '同步时间',
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
