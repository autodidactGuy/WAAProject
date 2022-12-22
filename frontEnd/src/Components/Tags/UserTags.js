import React, { useEffect } from 'react';
import { Avatar, Button, List, Select } from 'antd';
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
    // const workExperienceData = useSelector((state) => state.jobEReducer.jobExperienceList);
    // useEffect(() => {
    //     dispatch(getJobExperienceList());
    //   },[]);

    // const dispatch = useDispatch();
    
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
        
        </div>
    );
}

export default UserTags;