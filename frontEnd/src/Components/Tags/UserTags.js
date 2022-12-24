import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Select, message } from 'antd';
import axios from 'axios';
import { getAccessToken } from '../../redux/userReducer';
//import { workExperienceData } from '../../Data/WorkExperienceData'

import { useDispatch, useSelector } from "react-redux";
import { convertListTagsApiToFront } from '../../Utils/Utils';



const UserTags = () =>
{
  const [allTags,setAllTags] = useState([]);
  const [myTags,setMyTags] = useState([]);
  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();


  async function handleChangeMyTags (value)  {
    let tags = []
    allTags.forEach(tag => {
      if(value.includes(tag.title))
      {
        tags.push({id: tag.id, title: tag.title, isSubscribed:true})
      }
      else 
      {
        tags.push({id: tag.id, title: tag.title, isSubscribed:false})
      }
    })
    //isLoading = true;
    //AXIOS
    try {
      const result=await axios.post(`/user/subscribTags`, {tags:value});
      if (result.status === 200) {
        message.success("tags updated successfully");
      } else {
        message.error("error");
      }
    } catch (e) {
      message.error("error");
    } finally {
      //isLoading = false;
    }
  };

  


  const getTags = async()=>{
    if(getAccessToken()!=null){
        const response=await axios.get("/tag");
        const convertResponse = convertListTagsApiToFront(response.data)
        console.log('converted tag : ',convertResponse);
        setAllTags(convertResponse)
        let tempMyTags = [];
        // for (let i = 0; i < response.length; i++) {
        //   let tmpTag = response[i];
        //   if(tmpTag.isSubscribed)
        //   {
        //     tempMyTags.push(tmpTag.title);
        //   }
        // }
        convertResponse.forEach(tag => {if(tag.isSubscribed){tempMyTags.push(tag.title)}})
        
        setMyTags(tempMyTags)
    }
    else{

    }
}

useEffect(()=>{
  if(allTags.length===0){
    getTags();
  }

    
},[allTags])

    return (
    
        <div style={{ marginLeft:'5px' }}>
            <h1> Tags interrested in</h1>
            
            <Select
                mode="multiple"
                style={{
                width: '100%',
                }}
                defaultValue={myTags}
                placeholder="Select tags"
                onChange={handleChangeMyTags}
                options={allTags}
            />
        </div>
    );
}

export default UserTags;