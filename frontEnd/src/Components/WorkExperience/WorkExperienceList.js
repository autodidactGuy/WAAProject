import React, { useEffect } from 'react';
import { Avatar, List } from 'antd';
import WorkExperience from './WorkExperience';
//import { workExperienceData } from '../../Data/WorkExperienceData'
import AddExperienceModal from './AddExperienceModal';
import { getJobExperienceList } from '../../redux/userReducer';
import { useDispatch, useSelector } from "react-redux";


const WorkExperienceList = () =>
{
    useEffect(() => {
        dispatch(getJobExperienceList());
      },[]);

    const dispatch = useDispatch();
    const workExperienceData = useSelector((state) => state.userReducer.jobExperienceList);
    console.log("workexperience 2:",workExperienceData);
    return (
    
        <div style={{ marginLeft:'5px' }}>
            <h1> Work experience <AddExperienceModal/></h1>
            
        <List
            itemLayout="horizontal"
                dataSource={workExperienceData}
                renderItem={(item) => (
                    <WorkExperience key={item.Id} item={ item } />
    
            )}
            />
        </div>
    );
}

export default WorkExperienceList;