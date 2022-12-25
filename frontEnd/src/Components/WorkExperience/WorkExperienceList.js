import React, { useEffect } from 'react';
import { Avatar, Button, List } from 'antd';
import WorkExperience from './WorkExperience';
//import { workExperienceData } from '../../Data/WorkExperienceData'
import AddExperienceModal from './AddExperienceModal';
import { getJobExperienceList } from '../../redux/jobExperienceReducer';
import { useDispatch, useSelector } from "react-redux";


const WorkExperienceList = () =>
{
    
    const workExperienceData = useSelector((state) => state.jobEReducer.jobExperienceList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJobExperienceList());
      },[]);

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