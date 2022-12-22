import React from 'react';
import { Card, Col, Row, Avatar  } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import moment from 'moment';

const Student = (props) => (
    <>
        <Card title={<>


                    <div> {props.student.firstName} {props.student.lastName}</div>
                    

                    </>}
            bordered={false}
            style={{ margin: '5px' }}>
            <Row>
                
                <Col style={{marginLeft:'5px'}} span={24}>
                    <div> <b>Email:</b> {props.student.email} </div>
                    <div> <EnvironmentOutlined /> {props.student.city.stateCode}, {props.student.city.cityName} </div>
                    <div> <b>Major:</b> {(props.student.major)?props.student.major:props.student.marjor} </div>
                    <div> <b>Phone:</b>{props.student.phoneNumber} </div>
                    <div> <b>Gender:</b>{props.student.gender} </div>
                    <div> <b>Birthday:</b>{props.student.birthday} </div>

                </Col>
            </Row>

        </Card>
    </>
);
export default Student;

