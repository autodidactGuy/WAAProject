import React, { useEffect } from 'react';
import { Avatar, List } from 'antd';
import { educationData } from '../../Data/EducationData'
import Education from './Education';
import AddEducationModal from './AddEducationModal';
import { useDispatch, useSelector } from 'react-redux';
import { geteducationList } from '../../redux/educationReducer';

const EducationList = () =>
{
    const educationList = useSelector((state)=>state.educationReducer.educationList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(geteducationList());
      },[]);
    return (
        <div style={{ marginLeft:'5px' }}>
            <h1> Education <AddEducationModal/></h1>
        <List
            itemLayout="horizontal"
                dataSource={educationList}
                renderItem={(item) => (
                    <Education item={ item } />
    
            )}
            />
        </div>
    );
}

export default EducationList;