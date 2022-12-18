import React from 'react';
import { Card, Col, Row, Avatar  } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';

const Adv = (props) => (
    <>
        <Card title={<>


                    <div> {props.adv.Title} </div>
                    <div style={{ color: 'gray', fontSize: '12px' }}> <CalendarOutlined /> {props.adv.PublicationDate} </div>


                    </>}
            bordered={false}
            style={{ margin: '5px' }}>
            <Row>
                <Col>
                    <Avatar shape="square" size={100}
                    src={props.adv.src}
                    icon={<UserOutlined />} />
                </Col>
                <Col style={{marginLeft:'5px'}}>
                    <div> Campany : {props.adv.CompanyName} </div>
                    <div> <EnvironmentOutlined /> {props.adv.State}, {props.adv.City} </div>
                    <div> {props.adv.Description} </div>

                </Col>
            </Row>

        </Card>
    </>
);
export default Adv;

