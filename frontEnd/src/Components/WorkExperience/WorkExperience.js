import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Space, Spin } from 'antd';
import UpdateExperienceModal from './UpdateExperienceModal';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJobExp } from '../../redux/jobExperienceReducer';
 
const WorkExperience = (props) => {
    const dispatch = useDispatch();
    const deletejobtatus = useSelector((state) => state.jobEReducer.addjobEstatus);
    if(deletejobtatus==="pending")
        return(
          <Spin tip="Loading" size="large">
          <div className="content" />
         </Spin>
        );
        else
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
                    <div>Company { props.item.Company} </div>
                    <div>Location : {props.item.State}, {props.item.City} </div>
                    <div>Details:{props.item.Details} </div>
                    <Space>
                    <UpdateExperienceModal isAdd={false} jobToUpdate={props.item}/>
                    <Button icon={<DeleteOutlined />}  size='small' type="primary" danger onClick={()=>dispatch(deleteJobExp(props.item.Id))}>
                    Delete
                    </Button>
                    </Space>
                </>}
            />
        </List.Item>
    );
};
export default WorkExperience;