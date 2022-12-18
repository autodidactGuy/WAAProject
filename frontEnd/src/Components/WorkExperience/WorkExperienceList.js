import React from 'react';
import { Avatar, List } from 'antd';
import WorkExperience from './WorkExperience';
import { workExperienceData } from '../../Data/WorkExperienceData'

const WorkExperienceList = () => (
    <div style={{ marginLeft:'5px' }}>
        <h1> Work experience </h1>
    <List
        itemLayout="horizontal"
            dataSource={workExperienceData}
            renderItem={(item) => (
                <WorkExperience item={ item } />

        )}
        />
    </div>
);
export default WorkExperienceList;