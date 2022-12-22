import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, message } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/userReducer';

function UserButton() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  return (
    <>
 
    
    <Dropdown
      menu={{
        items:[
            {key:'1', label:<Link to="/myprofile">myprofile</Link>},
            {key:'2', label:<Link to="/myappliedjobs">appliedjobs</Link>},
            {key:'3', label:<Link to="/mysubmittedadv">SubmittedAdvertisements</Link>},
            {key:'4', label:<div onClick={()=>{
              dispatch(logout());
              navigate('home');
              
             
            }
            
            }><LogoutOutlined /> logout </div>}
    ]
      }}
      placement="bottomLeft"
      arrow
    >
      <div > Welcome user ! <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
    </Dropdown>
    </>
  )
}

export default UserButton
