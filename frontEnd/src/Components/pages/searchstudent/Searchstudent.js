import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Spin } from 'antd';

function searchstudent() {
  return (
    <Row>
    <Col span={12} offset={6} className="mt-20">
  <Form
    name="search_student"
    className="search_student"
    initialValues={{
      remember: true,
    }}
  >
    <Form.Item
      name="email"
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="password"
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Search
      </Button>
    </Form.Item>
  </Form>
  </Col>
  </Row>
  )
}
export default searchstudent
