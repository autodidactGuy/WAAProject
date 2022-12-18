import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Row, Col, Form, Input, RangePicker, Checkbox } from 'antd';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;


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

const WorkExperienceEdit = (props) => {

    const onFinish = (values) => {
        console.log(values);
        if(props.isAdd)
        {
            //Add
        }
        else 
        {
            //Update
        }

      };
    return (
        <>
        <Row>
             <Col span={12} offset={6}>
            <h1 style={{textAlign: 'center'}}>  {props.isAdd ? "Add " : "Update "}  work experience </h1>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['workExperience', 'JobTitle']} label="Job Title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['workExperience', 'FromTo']} label="From To" rules={[{ required: true }]}>
                    <RangePicker picker="month" bordered={false} />
                </Form.Item>
                <Form.Item name={['workExperience', 'IsCurrentPosition']}  label="IsCurrentPosition">
                    <Checkbox>IsCurrentPosition</Checkbox>
                </Form.Item>
 
                <Form.Item name={['workExperience', 'State']} label="State" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['workExperience', 'City']} label="City" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['workExperience', 'CompanyName']} label="CompanyName" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['workExperience', 'Details']} label="Details" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        { props.isAdd ? "Add " : "Update " }
                    </Button>
                </Form.Item>
        </Form>
        </Col>
        </Row>
        </>
    );
};
export default WorkExperienceEdit;