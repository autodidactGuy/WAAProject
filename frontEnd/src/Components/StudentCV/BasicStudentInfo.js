import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Input, Modal, Space } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react'
import BasicStudentInfoModal from './BasicStudentInfoModal'
import Moment  from 'moment';

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

function BasicStudentInfo() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    alert("TODO");
    

  
    };

  const userInfo= useSelector((state)=>state.userReducer.userInfo)
  console.log("user in of : ",userInfo)
  return (
    <div style={{textAlign:"center"}}>
      <Avatar size={64} icon={<UserOutlined />} />
      <div> {userInfo.firstName}, {userInfo.lastName}  </div>
      <div>age : {Moment().diff(userInfo.birthday, 'years')}</div>
      <div><PhoneOutlined />phone number : {userInfo.phoneNumber} </div>
      <div><MailOutlined />email : {userInfo.email}  </div>
      
      <Space>
      <BasicStudentInfoModal/>

      <Button icon={<LockOutlined />} type="primary" onClick={showModal}>
        Reset Password
      </Button>
      <Modal title="Reset your password" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
        name="oldpassword"
        label="oldPassword"
        rules={[
          {
            required: true,
            message: 'Please input your oldpassword',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
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
    </Form>
      </Modal>
      </Space>
    </div>
  )
}

export default BasicStudentInfo
