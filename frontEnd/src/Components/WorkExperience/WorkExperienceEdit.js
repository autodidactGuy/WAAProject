import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Row, Col, Form, Input, DatePicker, Checkbox, Cascader, Spin } from 'antd';

import { addJobExperience, updateJobExperience } from '../../redux/jobExperienceReducer';
import {getLocations } from '../../redux/locationReducer';
import { useDispatch, useSelector } from "react-redux";
import { stringToDate } from '../../Utils/Utils';
import { Moment } from 'moment';
import dayjs from 'dayjs';
import { dateToString } from './../../Utils/Utils';

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
  const addJobStatus = useSelector((state) => state.jobEReducer.addjobEstatus);
  const updatejobtatus = useSelector((state) => state.jobEReducer.updatejobtatus);
  
  const locations = useSelector((state)=>state.locationReducer.locations)
  const getLocationStatus = useSelector((state)=>state.locationReducer.getLocationStatus)
  const dispatch = useDispatch();
  const filter = (inputValue, path) =>
  path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    useEffect(()=>{
      
      if(!props.isAdd)
      {
        onFill();
      }
    if(locations===[] || locations.length==0) dispatch(getLocations());
    },[locations])
    const [form] = Form.useForm();
    const onFill = () => {
      
        let propsClone = {...props}

        let we = propsClone.workExperience;
        let workExperience = {
         ...we,
          FromTo: [stringToDate(props.workExperience.From), stringToDate(props.workExperience.To)],
          location: [props.workExperience.State, props.workExperience.City]
        }
        propsClone.workExperience = workExperience;
        console.log("value: props:",workExperience);
        form.setFieldsValue(propsClone);
      };

    

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
            console.log("the object to update : ",updatedjob)
            dispatch(updateJobExperience(updatedjob))
             
        }



      };
      
      if(addJobStatus==="pending" || updatejobtatus==="pending")
        return(
          <Spin tip="Loading" size="large">
          <div className="content" />
         </Spin>
        );
        else
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
                    <RangePicker format='YYYY-MM' picker="month" bordered={false} />
                </Form.Item>
                
                <Form.Item valuePropName="checked"   name={['workExperience', 'IsCurrentPosition']}  label="IsCurrentPosition">
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