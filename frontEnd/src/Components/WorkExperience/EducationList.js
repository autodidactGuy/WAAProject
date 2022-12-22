import React from 'react';
import { Avatar, List } from 'antd';
import { educationData } from '../../Data/EducationData'
import Education from './Education';
import AddEducationModal from './AddEducationModal';
import { useSelector } from 'react-redux';

const EducationList = () =>
{
    const educationList = useSelector((state)=>state.educationReducer.educationList)

    return (
        <div style={{ marginLeft:'5px' }}>
            <h1> Education <AddEducationModal/></h1>
        <List
            itemLayout="horizontal"
                dataSource={educationData}
                renderItem={(item) => (
                    <Education item={ item } />
    
            )}
            />
        </div>
    );
}

export default EducationList;