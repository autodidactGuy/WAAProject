import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Space } from 'antd';
import UpdateExperienceModal from './UpdateExperienceModal';
import { DeleteOutlined } from '@ant-design/icons';
 
const WorkExperience = (props) => {
    
    return (
        
        <List.Item>
            <List.Item.Meta

                title={
                    <>
                        <div style={{ color: 'gray' }}>{props.item.From} - {props.item.IsCurrentPosition ? "Present" : props.item.To} </div>
                        <div>{props.item.JobTitle}</div>
                    </>}
                description={
                <>
                    <div>Company {props.item.Company} </div>
                    <div>Location : {props.item.State}, {props.item.City} </div>
                    <div>{props.item.Details} </div>
                    <Space>
                    <UpdateExperienceModal isAdd={false} jobToUpdate={props.item}/>
                    <Button icon={<DeleteOutlined />}  size='small' type="primary" danger onClick={()=>alert('to implement')}>
                    Delete
                    </Button>
                    </Space>
                </>}
            />
        </List.Item>
    );
};
export default WorkExperience;