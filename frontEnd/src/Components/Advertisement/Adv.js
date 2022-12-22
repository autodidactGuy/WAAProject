import React from 'react';
import { Card, Col, Row, Avatar  } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';

const Adv = (props) => (
    <>
        <Card title={<>


                    <div> {props.adv.profile} </div>
                    <div style={{ color: 'gray', fontSize: '12px' }}> <CalendarOutlined /> {props.adv.publicationDate} </div>


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
                    <div> Campany : {props.adv.companyName} </div>
                    <div> <EnvironmentOutlined /> {props.adv.city.stateCode}, {props.adv.city.cityName} </div>
                    <div> {props.adv.description} </div>

                </Col>
            </Row>

        </Card>
    </>
);
export default Adv;

