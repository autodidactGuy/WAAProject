import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Select } from 'antd';
import axios from 'axios';
import { getAccessToken } from '../../redux/userReducer';
//import { workExperienceData } from '../../Data/WorkExperienceData'

import { useDispatch, useSelector } from "react-redux";
import { convertListTagsApiToFront } from '../../Utils/Utils';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const UserTags = () =>
{
  const [myTags,setMyTags] = useState([]);
  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();
  


  const getTags = async()=>{
    if(getAccessToken()!=null){
        const response=await axios.get("/tag");
        const convertResponse = convertListTagsApiToFront(response.data)
        console.log('converted tag : ',convertResponse);
        setMyTags(convertResponse)
    }
    else{

    }
}

useEffect(()=>{
  if(myTags.length===0){
    getTags();
  }

    
},[myTags])

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
                options={myTags}
                
            />
        </div>
    );
}

export default UserTags;