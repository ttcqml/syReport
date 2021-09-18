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
      url: 'report/orgManage',
      param: {...this.defParam, ...this.formParam, ...param},
    }).then(d => {
      this.setState({
        tableLoading: false,
        ...d
      })
    })
  }



  render() {
    let {tableLoading, data, pageNo, pageSize, totalCnt} = this.state;

    return <div className="mygl">


      <Divider />

      <Table
        loading={tableLoading}
        bordered
        dataSource={data}
        rowKey="id"
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
            title: '序号',
            dataIndex: 'key',
            align: 'center',
            fixed: 'left',
            width: 50,
            render: (text, record, index) => index + 1
          },
          {
            title: '店铺名称',
            dataIndex: 'name',
            align: 'center',
            fixed: 'left',
            width: 150,
            ellipsis: true,
          },
          {
            title: '店铺编号',
            dataIndex: 'kdtId',
            align: 'center',
            width: 100
          },
          {
            title: '父级编号',
            dataIndex: 'parentKdtId',
            align: 'center',
            width: 100
          }
        ]}
      />
    </div>;
  }
};
