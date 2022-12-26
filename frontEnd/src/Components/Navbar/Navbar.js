import React, { useState } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import LoginModal from '../login/loginform/LoginModal';
import RegisterModal from '../register/registerform/RegisterModal';
import Login from '../Connection/Login';
import Register from '../Connection/Register';
import UserButton from '../dropdown/UserButton';
import { Link, useLocation } from 'react-router-dom';


import logo from '../../Images/logo.png'

import useSelection from 'antd/es/table/hooks/useSelection';
import { useSelector } from 'react-redux';




const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function Navbar() {
    const [currentTab, setCurrentTab] = useState(1);

    const location = useLocation();

    

    if(location.pathname === ''){
        setCurrentTab(1)
    }
    else if(location.pathname === ''){
        setCurrentTab(2)
    }
    else if(location.pathname === ''){
        setCurrentTab(3)
    }
    else if(location.pathname === ''){
        setCurrentTab(4)
    }
    else if(location.pathname === ''){
        setCurrentTab(5)
    }
    else if(location.pathname === ''){
        setCurrentTab(6)
    }

    
    const userInfo= useSelector((state)=>state.userReducer.userInfo)
    const isLogged= useSelector((state)=>state.userReducer.isLogged)
    const getItem=()=>{
        if (!isLogged){
            return [
                { label: <Link to="/home">Home</Link>, key: "1" },
                { label:  <Login/>, key: "7" },
                { label: <Register/>, key: "8" },
                
            ]
        }
        else
        if(userInfo.role[0].name==="STUDENT"){
            return [
                { label: <Link to="/home">Home</Link>, key: "1" },
                { label: <Link to="/lastjobs">Last jobs</Link>, key: "2" },
                { label: <Link to="/lastappliedjobs">Last applied jobs</Link>, key: "3" },
                { label: <Link to="/searchJobs">Find Jobs</Link>, key: "4" },
                { label: <UserButton/>, key: "6" },
            ];
        }else if(userInfo.role[0].name==="FACULTY"){
           return [
                { label: <Link to="/home">Home</Link>, key: "1" },
                { label: <Link to="/lastjobs">Last jobs</Link>, key: "2" },
                { label: <Link to="/lastappliedjobs">Last applied jobs</Link>, key: "3" },
                { label: <Link to="/searchstudent">Find Students</Link>, key: "4" },
                { label: <Link to="/searchJobs">Find Jobs</Link>, key: "5" },
                { label: <UserButton/>, key: "6" },
            ]
        }else {
            return [
                { label: <Link to="/home">Home</Link>, key: "1" },
                { label: <Link to="/searchstudentfaculty">Find Students faculty</Link>, key: "4" },
                { label: <UserButton/>, key: "6" },
            ]
        }
    }
 
 
   
 
    return (
        <div>
            <div
                className='logo'
            ><img  style={{
                float: 'left',
                width: 120,
                height: 31,
                margin: '16px 24px 16px 0',
            }} src={logo} alt="Logo" /></div>
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