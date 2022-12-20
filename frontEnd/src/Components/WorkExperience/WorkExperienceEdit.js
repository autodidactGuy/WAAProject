import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Row, Col, Form, Input, DatePicker, Checkbox, Cascader } from 'antd';

import { addJobExperience, getLocations, updateJobExperience } from '../../redux/userReducer';
import { useDispatch, useSelector } from "react-redux";

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

  const locations = useSelector((state)=>state.userReducer.locations)
  const getLocationStatus = useSelector((state)=>state.userReducer.getLocationStatus)
  const dispatch = useDispatch();
  const filter = (inputValue, path) =>
  path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    useEffect(()=>{
      onFill();
    if(locations===[] || locations.length==0) dispatch(getLocations());
    console.log(locations);
    },[locations])
    const [form] = Form.useForm();
    const onFill = () => {
        console.log("value: props:",props);
        form.setFieldsValue(props);
      };

    

    const onFinish = (values) => {
        console.log(values);
        if(props.isAdd)
        {
            //Add
            const newJob=values.workExperience;
            console.log("job to add:",newJob)
            dispatch(addJobExperience(newJob));
        }
        else 
        {
            //Update
            const updatedjob={...values.workExperience, Id:props.workExperience.Id};
            console.log("the object to update : ",updatedjob)
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
                <Form.Item  name={['workExperience', 'IsCurrentPosition']}  label="IsCurrentPosition">
                    <Checkbox>IsCurrentPosition</Checkbox>
                </Form.Item>
                
                <Form.Item
        name={['workExperience', 'location']}
        label="location"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select the location',
          },
        ]}
      >
        <Cascader options={locations} 
        
        showSearch={{
          filter,
        }}
        />
      </Form.Item>
                
                 <Form.Item name={['workExperience', 'Company']} label="CompanyName" rules={[{ required: true }]}>
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