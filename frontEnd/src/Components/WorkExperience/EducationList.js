import React from 'react';
import { Avatar, List } from 'antd';
import { educationData } from '../../Data/EducationData'
import Education from './Education';

const EducationList = () => (
    <div style={{ marginLeft:'5px' }}>
        <h1> Education </h1>
    <List
        itemLayout="horizontal"
            dataSource={educationData}
            renderItem={(item) => (
                <Education item={ item } />

        )}
        />
    </div>
);
export default EducationList;