import s from './index.css';
import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  render() {
    let { location, paths, pages } = this.props;
    let path = location.pathname;
    return (
      pages[path] ?
        paths[path] ?
          '(*￣︶￣)' :
          '很抱歉，您暂无访问该页面权限！' :
        '很抱歉，您要访问的页面不存在！'
    );
  }
};
