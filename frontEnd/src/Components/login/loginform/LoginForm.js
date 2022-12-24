import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Spin, message } from 'antd';
import { loginUser } from '../../../redux/userReducer';
import { useDispatch ,useSelector} from "react-redux";
import { setIsforgotPassword } from '../../../redux/userReducer';
import Moment from 'moment'
import Search from 'antd/es/input/Search';
import axios from 'axios';


function LoginForm() {
  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  const dispatch = useDispatch();

  async function forgotPasswordAxios (value)  {
    console.log("enable disable account",value)
    //isLoading = true;
    //AXIOS
    try {
      const result=await axios.post(`/validate/sendValidationEmail`, value, {headers: {
        //'Authorization': `Bearer ${token}` ,
        'Content-Type':'multipart/form-data' 
      
     }});
      if (result.status === 200) {
        message.success("Please check your email to reset your password");
        dispatch(setIsforgotPassword(false))
      } else {
        message.error("error");
      }
    } catch (e) {
      message.error("error");
    } finally {
      //isLoading = false;
    }
  };

  const forgotPassword = () => 
  {
    dispatch(setIsforgotPassword(true))
  }
  const loginstatus = useSelector((state) => state.userReducer.loginstatus);
  const isforgotPassword = useSelector((state) => state.userReducer.isforgotPassword);

    const onFinish = (values) => {
        dispatch(loginUser(values));
      };
      if(loginstatus==="pending")
        return(
          <Spin tip="Loading" size="large">
          <div className="content" />
         </Spin>
        );
        else
  return (
    
    <Row>
    <Col span={12} offset={6}>
      
      
    {
        !isforgotPassword &&  
  <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Button className="login-form-forgot" onClick={forgotPassword}>
        Forgot password
      </Button>

      
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
      Or <a href="">register now!</a>
    </Form.Item>
  </Form>
  }
  {
        isforgotPassword &&
        <Form name="forgotpassword" onFinish={forgotPasswordAxios}>
          <Form.Item name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email',
                },
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
              ]}>
              <Input placeholder='your email'  />
              
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">Reset</Button>
          </Form>
  }

  </Col>
  </Row>
  )
}

export default LoginForm
