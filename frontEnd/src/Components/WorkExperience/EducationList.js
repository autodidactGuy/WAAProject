import React from 'react';
import { Avatar, List } from 'antd';
import WorkExperience from './WorkExperience';
import { educationData } from '../../Data/EducationData'

const EducationList = () => (
    <div style={{ marginLeft:'5px' }}>
        <h1> Education </h1>
    <List
        itemLayout="horizontal"
            dataSource={educationData}
            renderItem={(item) => (
                <WorkExperience item={ item } />

        )}
        />
    </div>
);
export default EducationList;