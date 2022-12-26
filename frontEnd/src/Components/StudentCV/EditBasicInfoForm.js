import React, { useEffect, useState } from 'react';
import { getLocations } from '../../redux/locationReducer';
import { useDispatch, useSelector } from "react-redux";
import Moment from 'moment'
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  DatePicker,
  Spin
} from 'antd';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

function EditBasicInfoForm(props) {

  console.log('user info a modifié ', props.user)


    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const locations = useSelector((state)=>state.locationReducer.locations)
    const getLocationStatus = useSelector((state)=>state.locationReducer.getLocationStatus)



      const filter = (inputValue, path) =>
  path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

  const onFill = () => {
    form.setFieldsValue(props.user);
  };

  useEffect(()=>{
    onFill();
    if(locations.length === 0)
    {
      dispatch(getLocations());
    }

},[]);

    const onFinish = (values) => {
        
        
    
      
        };

        
  return (
    <div>
      <Row>
    <Col span={24} offset={0}>
    <Form 

      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['state', 'city'],
      }}
      scrollToFirstError
    >
      
    


    <Form.Item
        name="firstName"
        label="First name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last name"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="birthday" label="Birthday" 
          rules= { [
            {
              type: 'object',
              required: true,
              message: 'Please input your birthday!',
            },
          ]}>
        <DatePicker style={{
            width: '100%',
          }}/>
      </Form.Item> 

      <Form.Item
        name="nickName"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="location"
        label="Habitual Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={locations} placeholder="State / City"
        
        showSearch={{
          filter,
        }}
        />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
           
          style={{
            width: '100%',
          }}
        />
      </Form.Item>


      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
    </Col>
    </ Row>
    </div>
  )
}

export default EditBasicInfoForm
