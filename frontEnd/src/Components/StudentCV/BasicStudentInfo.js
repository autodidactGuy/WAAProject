import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import React from 'react'


function BasicStudentInfo() {
  return (
    <div style={{textAlign:"center"}}>
      <Avatar size={64} icon={<UserOutlined />} />
      <div> FirstName Lastname </div>
      <div>age : 29</div>
      <div><PhoneOutlined />phone number : 1234 </div>
      <div><MailOutlined />email : test@gmail.com </div>
      <Button>edit short profile</Button>

    </div>
  )
}

export default BasicStudentInfo
