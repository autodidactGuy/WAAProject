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

function EditBasicInfoForm() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const locations = useSelector((state)=>state.userReducer.locations)
    const getLocationStatus = useSelector((state)=>state.locationReducer.getLocationStatus)
    // useEffect(()=>{
    //     dispatch(getLocations());
    
    //   })
      const filter = (inputValue, path) =>
  path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);


    const onFinish = (values) => {
        const newuser =
        {
          major:values.major,
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          password: values.password,
          nickname: values.nickname,
          phone: values.phone,
          gender: values.gender,
          role: values.role,
          birthday: Moment(values.birthday).format("YYYY-MM-DD"),
          stateCode:values.residence[0],
          cityCode: values.residence[1]
      }
        
    
      
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
        name="major"
        label="Major"
        rules={[
          {
            required: true,
            message: 'Please input your major!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    


    <Form.Item
        name="firstname"
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
        name="lastname"
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
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
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
        name="nickname"
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
        name="residence"
        label="Habitual Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={locations} 
        
        showSearch={{
          filter,
        }}
        />
      </Form.Item>

      <Form.Item
        name="phone"
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

      <Form.Item
        name="role"
        label="Role"
        rules={[
          {
            required: true,
            message: 'Please select role!',
          },
        ]}
      >
        <Select placeholder="select your role">
          <Option value="STUDENT">Student</Option>
          <Option value="FACULT">Faculty</Option>
        </Select>
      </Form.Item>


      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >

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
