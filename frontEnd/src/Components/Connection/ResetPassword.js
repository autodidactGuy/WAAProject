import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Row, Col, Spin, message } from 'antd';
import { useDispatch ,useSelector} from "react-redux";
import Moment from 'moment'
import Search from 'antd/es/input/Search';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



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

function ResetPassword() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
    const [form] = Form.useForm();
    let { token } = useParams();

  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  const dispatch = useDispatch();

  async function resetMyPassword (value)  {
    //AXIOS
    try {
      setIsLoading(true);
      const result=await axios.post(`/validate/reset`, {token:token, newPassword:value.password});
      if (result.status === 200) {
        message.success("Password updated successfully!");
        setIsSuccess(true);
      } else {
        message.error("error");
      }
    } catch (e) {
      message.error("error");
    } finally {
      setIsLoading(false);
    }
  };




    const onFinish = (values) => {
        resetMyPassword(values);
      };

      if(isSuccess)
      {
        navigate('/home');
      }
      else if(isLoading)
      {
          return (
            <>
             <h1 style={{textAlign:'center'}}>Reset your password </h1>
             <Row style={{marginTop: '20px'}}>
          
          <Col  xs={{ span: 23, offset: 1 }} sm={{ span: 20, offset: 4 }} md={{ span: 18, offset: 6 }}  lg={{ span: 12, offset: 6 }} xl={{ span: 12, offset: 6 }}  xxl={{ span: 12, offset: 6 }}>
          
          <Spin size="large" />
          </Col>
          </Row>
            </>
          )
      }
      else 
      {
        return (
    
          <> 
          <h1 style={{textAlign:'center'}}>Reset your password </h1>
          <Row style={{marginTop: '20px'}}>
          
          <Col  xs={{ span: 23, offset: 1 }} sm={{ span: 20, offset: 4 }} md={{ span: 18, offset: 6 }}  lg={{ span: 12, offset: 6 }} xl={{ span: 12, offset: 6 }}  xxl={{ span: 12, offset: 6 }}>
          
           <Form
    {...formItemLayout}
    form={form}
    name="register"
    onFinish={onFinish}
    initialValues={{
      residence: ['zhejiang', 'hangzhou', 'xihu'],
      prefix: '86',
    }}
    scrollToFirstError
  >

<Form.Item
      name="password"
      label="New password"
      rules={[
        {
          required: true,
          message: 'Please input your new password!',
        },
      ]}
      hasFeedback
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="confirm"
      label="Confirm your new Password"
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
    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        Reset your password
      </Button>
    </Form.Item>
  </Form>
  </Col>
  </Row>
          </>
)
      }

  
}

export default ResetPassword
