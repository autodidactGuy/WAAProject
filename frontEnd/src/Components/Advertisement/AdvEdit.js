import React from 'react';
import { Card, Col, Row, Avatar, Button, Form, Input, InputNumber   } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const AdvEdit = (props) => {
    const onFinish = (values) => {
        console.log(values);
      };
    return (
        <>
        <Row>
             <Col span={12} offset={6}>
            <h1 style={{textAlign: 'center'}}>  {true ? "Add " : "Update "}  Job advertisement </h1>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['adv', 'Title']} label="Job Title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['adv', 'State']} label="State" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['adv', 'City']} label="City" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['adv', 'CompanyName']} label="CompanyName" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['adv', 'Description']} label="Description" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
        </Form>
        </Col>
        </Row>
        </>
    );
}


export default AdvEdit;

