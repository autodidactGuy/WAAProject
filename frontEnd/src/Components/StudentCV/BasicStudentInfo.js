import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Input, Modal, Space } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import BasicStudentInfoModal from './BasicStudentInfoModal'
import Moment  from 'moment';
import { message } from 'antd';
import axios from 'axios';
import { getAccessToken, getProfile } from '../../redux/userReducer';

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

  const dispatch = useDispatch();

  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  onReset();

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

  async function resetMyPassword (value)  {

    const valueToSend = {
      newPassword: value.newPassword,
      oldPassword: value.oldPassword
    }

    //isLoading = true;
    //AXIOS
    try {
      const result=await axios.post("/user/resetPassword",valueToSend);
      if (result.status === 200) {

        setIsModalOpen(false);
        message.success("Password updated successullfy.");
      } else {
        message.error("error");
      }
    } catch (e) {
      message.error("error");
    } finally {
      //isLoading = false;
    }
  };

  const onFinish = async(values) =>{
    await resetMyPassword(values);
    };




  const userInfo= useSelector((state)=>state.userReducer.userInfo)
  const myProfile= useSelector((state)=>state.userReducer.myProfile)
  


  useEffect(() => {
    dispatch(getProfile());
  },[]);

  return (
    <div style={{textAlign:"center"}}>
      <Avatar size={64} src={userInfo.srcLogo} icon={<UserOutlined />} />
      <div> {userInfo.firstName}, {userInfo.lastName}  </div>
      <div>age : {Moment().diff(userInfo.birthday, 'years')}</div>
      <div><PhoneOutlined />phone number : {userInfo.phoneNumber} </div>
      <div><MailOutlined />email : {userInfo.email}  </div>
      
      <Space>
      <BasicStudentInfoModal user={myProfile}/>

      <Button icon={<LockOutlined />} type="primary" onClick={showModal}>
        Reset Password
      </Button>
      <Modal 
        title="Reset your password" 
        open={isModalOpen} 
        onCancel={handleCancel}
        footer={[
          <Button type="primary" form="resetPasswordForm" key="submit" htmlType="submit">
              Reset
          </Button>,
          <Button onClick={handleCancel}>
           Cancel
            </Button>
          ]}
      >
      <Form
      id="resetPasswordForm"
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
        name="oldPassword"
        label="Old Password"
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
        name="newPassword"
        label="New Password"
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
        label="Confirm New Password"
        dependencies={['newPassword']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
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
