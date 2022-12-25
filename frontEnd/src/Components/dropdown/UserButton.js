import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, message } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/userReducer';

function UserButton() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const userInfo= useSelector((state)=>state.userReducer.userInfo)


  const getItems=()=>{

      if(userInfo.role[0].name==="STUDENT")
      {
        return [
          {key:'1', label:<Link to="/myprofile">myprofile</Link>},
          {key:'2', label:<Link to="/myappliedjobs">appliedjobs</Link>},
          {key:'3', label:<Link to="/mysubmittedadv">SubmittedAdvertisements</Link>},
      ]
      }
      else {
        return [
          {key:'1', label:<Link to="/myprofile">myprofile</Link>},
          
      ]
      }

   
    
}

  return (
    <>
 
    
    <Dropdown
      menu={{
        items:[
            ...getItems(),
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
      <div > Welcome {userInfo.nickName} ! <Avatar src={userInfo.srcLogo} icon={<UserOutlined />} /></div>
    </Dropdown>
    </>
  )
}

export default UserButton
