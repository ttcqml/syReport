import s from './index.css';
import React, {Component} from 'react';
import {post} from 'libs/request';
import {Form, Input, Button, message, Card} from 'antd';
import {UserOutlined, LockOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {saltEncrypt} from 'libs/util';

export default class extends Component {
  constructor(props) {
    document.title = '销售报表系统';
    super(props);
    this.state = {};
  }

  login = form => {
    post({
      url: 'report/login',
      param: {
        username: form.username,
        password: form.password,
      }
    }).then(d => {
      if(d.login === "1"){
        sessionStorage.setItem("login", d.login);
        this.props.history.push('/Main');
      }else{
        message.error("登录账号或密码错误");
      }
    });
  }

  render() {
    return <>
    <Card className={s.card} hoverable>
      <div className={s.name}>销售报表系统</div>
      <Form
        className={s.form}
        onFinish={this.login}
      >
        <Form.Item
          name="username"
          rules={[{required: true, message: '账号不能为空'}]}
        >
          <Input size="large" prefix={<UserOutlined />} allowClear autoComplete="off" placeholder="请输入员工账号"/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{required: true, message: '密码不能为空'}]}
        >
          <Input.Password size="large" allowClear prefix={<LockOutlined />} placeholder="请输入密码"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="btn-login" size="large" htmlType="submit" block>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
        </Form.Item>
      </Form>
    </Card>

    </>;
  }
};
