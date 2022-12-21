import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Space } from 'antd';
import UpdateEducationModal from './UpdateEducationModal';
import { DeleteOutlined } from '@ant-design/icons';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const Education = (props) => {

    return (
        <List.Item>
            <List.Item.Meta

                title={
                    <>
                        <div style={{ color: 'gray' }}>{props.item.Year}  </div>
                        <div>{props.item.EducationTitle}</div>
                    </>}
                description={
                <>
                    <div>Degree {props.item.Degree} </div>
                    <div>Company {props.item.Company} </div>
                    <div>Description {props.item.Description} </div>
                    <div>GPA {props.item.GPA} </div>
                    
                    <Space>
                    <UpdateEducationModal isAdd={false} educationToUpdate={props.item}/>
                    <Button icon={<DeleteOutlined />} size='small' type="primary" danger onClick={()=>alert('to implement')}>
                     Delete
                    </Button>
                    </Space>
                </>}
            />
        </List.Item>
    );
};
export default Education;