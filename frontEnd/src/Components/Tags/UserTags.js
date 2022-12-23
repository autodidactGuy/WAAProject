import React, { useEffect } from 'react';
import { Avatar, Button, List, Select } from 'antd';
import axios from 'axios';
import { getAccessToken } from '../../redux/userReducer';
//import { workExperienceData } from '../../Data/WorkExperienceData'

import { useDispatch, useSelector } from "react-redux";

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const UserTags = () =>
{
  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();
    

  const getTags = async()=>{
    if(getAccessToken()!=null){

        const response=await axios.get("/tag");
        console.log(response);
    }
    else{

    }
}

    return (
    
        <div style={{ marginLeft:'5px' }}>
            <h1> Tags interrested in</h1>
            
            <Select
                mode="tags"
                style={{
                width: '100%',
                }}
                placeholder="Tags Mode"
                onChange={handleChange}
                options={options}
                
            />
        <Button onClick={getTags}> get tag</Button>
        </div>
    );
}

export default UserTags;