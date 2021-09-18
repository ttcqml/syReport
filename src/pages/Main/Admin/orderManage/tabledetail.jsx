import React, {Component} from 'react';
import {Table} from 'antd';
const columns = [{
  title: '序号',
  dataIndex: 'key',
  align: 'center',
  width: 10,
  render: (text, record, index) => index + 1
},
  {
    title: '商品名称',
    dataIndex: 'prdName',
    align: 'center',
    width: 100,
  },
  {
    title: '数量',
    dataIndex: 'num',
    align: 'center',
    width: 40,
  },
  {
    title: '实付金额',
    dataIndex: 'totalFee',
    align: 'center',
    width: 40,
  }];

export default class extends Component {
  render() {
    return (
      <div style={{width: 1200}}>
        <Table columns={columns} dataSource={this.props.data} size="small" pagination={false} bordered={true}
               rowKey={(record, index) => {
                 return record.wineRecordDetailId
               }}/>
      </div>
    );
  }
}