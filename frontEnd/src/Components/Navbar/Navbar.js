import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import LoginModal from '../login/loginform/LoginModal';
import RegisterModal from '../register/registerform/RegisterModal';
import Login from '../Connection/Login';
import Register from '../Connection/Register';




const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function Navbar() {
    return (
        <div>
            <div
                style={{
                    float: 'left',
                    width: 120,
                    height: 31,
                    margin: '16px 24px 16px 0',
                    background: 'rgba(255, 255, 255, 0.2)',
                }}
            />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={[
                    { label: <div>home</div>, key: "1" },
                    { label: <div>Student</div>, key: "2" },
                    { label: <div>Jobs</div>, key: "3" },
                    { label:  <Login/>, key: "4" },
                    { label: <Register/>, key: "5" },
                ]}
            />
        </div>
    )
}

export default Navbar
