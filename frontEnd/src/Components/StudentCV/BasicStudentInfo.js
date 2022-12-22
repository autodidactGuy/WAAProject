import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import BasicStudentInfoModal from './BasicStudentInfoModal'
import Moment  from 'moment';


function BasicStudentInfo() {
  const userInfo= useSelector((state)=>state.userReducer.userInfo)
  console.log("user in of : ",userInfo)
  return (
    <div style={{textAlign:"center"}}>
      <Avatar size={64} icon={<UserOutlined />} />
      <div> {userInfo.firstName}, {userInfo.lastName}  </div>
      <div>age : {Moment().diff(userInfo.birthday, 'years')}</div>
      <div><PhoneOutlined />phone number : {userInfo.phoneNumber} </div>
      <div><MailOutlined />email : {userInfo.email}  </div>
      <BasicStudentInfoModal/>

    </div>
  )
}

export default BasicStudentInfo
