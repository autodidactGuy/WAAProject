import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Spin } from 'antd';

function searchstudent() {
  return (
    <Row>
    <Col span={12} offset={1} className="mt-20 ">
  <Form
    name="search_student"
    className="search_student"
    initialValues={{
      remember: true,
    }}
  >

    <Form.Item
      name="text"
    >
      <Input placeholder="text" />
      <Input
        type="text"
        placeholder="text"
      />
    </Form.Item>

    <Form.Item
    >
      <Button type="primary" htmlType="submit" className="search-form-button">
        Search
      </Button>
    </Form.Item>
  </Form>
  </Col>
  </Row>
  )
}
export default searchstudent
