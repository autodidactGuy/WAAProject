import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Row, Col, Form, Input, DatePicker, Checkbox } from 'antd';

import { addJobExperience, updateJobExperience } from '../../redux/userReducer';
import { useDispatch } from "react-redux";
const { RangePicker } = DatePicker;

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
    useEffect(()=>{onFill()},[])
    const [form] = Form.useForm();
    const onFill = () => {
        console.log("value: props:",props);
        form.setFieldsValue(props);
      };

    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log(values);
        if(props.isAdd)
        {
            //Add
            const newJob=values.workExperience;
         
            dispatch(addJobExperience(newJob));
        }
        else 
        {
            //Update
            const updatedjob={...values.workExperience, Id:props.workExperience.Id};
            
            dispatch(updateJobExperience(updatedjob))
             
        }

      };
    return (
        <>
        <Row>
             <Col span={24} offset={0}>
            <h1 style={{textAlign: 'center'}}>  {props.isAdd ? "Add " : "Update "}  work experience </h1>

            <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
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