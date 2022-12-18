import React from 'react';
import { Col, Row } from 'antd';
import { TenJobAdv } from '../../Data/TenJobAdv'

import Adv from '../Advertisement/Adv'


const TenLastJobAdv = () => (
    <>
        <h1 style={{margin:'5px'}}> The last 10 job advertisements </h1>
        <Row>
            {TenJobAdv.map(adv => <Col key={adv.Id} xs={24} sm={12} md={12} lg={8} xl={6}> <Adv adv={adv} /> </Col>)}
        </Row>
    </>
);
export default TenLastJobAdv;