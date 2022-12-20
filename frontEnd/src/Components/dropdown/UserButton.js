import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/userReducer';
function UserButton() {
  const dispatch=useDispatch();
  return (
    <Dropdown
      menu={{
        items:[
            {key:'1', label:<Link to="/myprofile">myprofile</Link>},
            {key:'2', label:<Link to="/myappliedjobs">appliedjobs</Link>},
            {key:'3', label:<Link to="/mysubmittedadv">SubmittedAdvertisements</Link>},
            {key:'4', label:<div onClick={()=>{
              dispatch(logout())
            }
            
            }><LogoutOutlined /> logout </div>}
    ]
      }}
      placement="bottomLeft"
      arrow
    >
      <Button ><UserOutlined /></Button>
    </Dropdown>
  )
}

export default UserButton
