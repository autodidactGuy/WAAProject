import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

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
                    <div>{props.item.Details} </div>
                </>}
            />
        </List.Item>
    );
};
export default WorkExperience;