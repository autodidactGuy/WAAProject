import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Row, Col, Form, Input, DatePicker, Checkbox, Cascader, InputNumber } from 'antd';

import { addJobExperience, getLocations, updateJobExperience } from '../../redux/userReducer';
import { useDispatch, useSelector } from "react-redux";
import { stringToDate } from '../../Utils/Utils';
import { Moment } from 'moment';
import dayjs from 'dayjs';
import { dateToString } from '../../Utils/Utils';

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

const EducationEdit = (props) => {

  // const locations = useSelector((state)=>state.userReducer.locations)
  // const getLocationStatus = useSelector((state)=>state.userReducer.getLocationStatus)
  // const dispatch = useDispatch();
  // const filter = (inputValue, path) =>
  // path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

     useEffect(()=>{
      
       if(!props.isAdd)
       {
         onFill();
       }

     },[])
    const [form] = Form.useForm();
     const onFill = () => {
      
         let propsClone = {...props}

         let we = propsClone.education;
         let education = {
          ...we,
           Year: stringToDate(props.education.Year),
         }
         propsClone.education = education;
         console.log("value: props:",education);
         form.setFieldsValue(propsClone);
       };

    

    const onFinish = (values) => {

        console.log(values);
        
        if(props.isAdd)
        {
            //Add
            const newEducation=values.education;
            console.log("education to add:",newEducation)
            //todo
            //dispatch(addJobExperience(newEducation));
        }
        else 
        {
            //Update
            const educationToUpdate={...values.education, Id:props.education.Id};
            console.log("eduction to update : ",educationToUpdate)
            //dispatch(updateJobExperience(educationToUpdate))
             
        }



      };
    return (
        <>
        <Row>
             <Col span={24} offset={0}>
            <h1 style={{textAlign: 'center'}}>  {props.isAdd ? "Add " : "Update "}  education </h1>

            <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['education', 'EducationTitle']} label="Title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['education', 'Degree']} label="Degree" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['education', 'Year']} label="Year" rules={[{ required: true }]}>
                  <DatePicker picker="year" />
                </Form.Item>
                <Form.Item name={['education', 'GPA']} label="GPA" rules={[{ required: true }]}>
                  <InputNumber min={0} max={4}/>
                </Form.Item>
                <Form.Item name={['education', 'Description']} label="Description" rules={[{ required: true }]}>
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
export default EducationEdit;