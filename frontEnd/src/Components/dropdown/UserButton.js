import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, message } from 'antd'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getProfile, logout } from '../../redux/userReducer';

function UserButton() {



  const dispatch=useDispatch();
  const navigate = useNavigate();
  const userInfo= useSelector((state)=>state.userReducer.userInfo)
  const myProfile= useSelector((state)=>state.userReducer.myProfile)

  useEffect(() => {
    dispatch(getProfile());
  },[]);
  
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
      <div > Welcome {myProfile.nickName} ! <Avatar src={myProfile.srcLogo} icon={<UserOutlined />} /></div>
    </Dropdown>
    </>
  )
}

export default UserButton
