import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import LoginModal from '../login/loginform/LoginModal';
import RegisterModal from '../register/registerform/RegisterModal';
import Login from '../Connection/Login';
import Register from '../Connection/Register';
import UserButton from '../dropdown/UserButton';
import { Link } from 'react-router-dom';


import logo from '../../Images/logo.png'

import useSelection from 'antd/es/table/hooks/useSelection';
import { useSelector } from 'react-redux';




const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function Navbar() {

    const userInfo= useSelector((state)=>state.userReducer.userInfo)
    console.log("user in of : ",userInfo)
    const isLogged= useSelector((state)=>state.userReducer.isLogged)
    console.log("user info :",userInfo);
    const getItem=()=>{
        if (!isLogged){
            return [
                { label: <Link to="/home">Home</Link>, key: "1" },
            
                { label: <Link to="/searchJobs">Find Jobs</Link>, key: "3" },
                { label:  <Login/>, key: "4" },
                { label: <Register/>, key: "5" },
                
            ]
        }
        else
        if(userInfo.role[0].name==="STUDENT"){
            return [
                { label: <Link to="/home">Home</Link>, key: "1" },
                { label: <Link to="/searchJobs">Find Jobs</Link>, key: "3" },
                { label: <UserButton/>, key: "6" },
            ];
        }else if(userInfo.role[0].name==="FACULTY"){
           return [
                { label: <Link to="/home">Home</Link>, key: "1" },
                { label: <Link to="/searchstudent">Find Students</Link>, key: "2" },
                { label: <Link to="/searchJobs">Find Jobs</Link>, key: "3" },
                { label: <UserButton/>, key: "6" },
            ]
        }else {
            return [
                { label: <Link to="/home">Home</Link>, key: "1" },
                { label: <Link to="/searchstudent">Find Students</Link>, key: "2" },
                { label: <UserButton/>, key: "6" },
            ]
        }
    }
 
 
   
 
    return (
        <div>
            <div
                className='logo'
            >Alumni Management System</div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={getItem()}
            />
        </div>
    )
}

export default Navbar