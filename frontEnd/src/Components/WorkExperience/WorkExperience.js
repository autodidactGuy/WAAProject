import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import UpdateExperienceModal from './UpdateExperienceModal';
 
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
                    <UpdateExperienceModal isAdd={false} jobToUpdate={props.item}/>
                    <Button size='small' type="primary" danger onClick={()=>alert('to implement')}>
                    delete
                    </Button>
                </>}
            />
        </List.Item>
    );
};
export default WorkExperience;