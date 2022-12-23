import React from 'react';
import { Card, Col, Row, Avatar, Switch, Button, Space  } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useSelector } from 'react-redux';

function Student (props)  {
    const userInfo= useSelector((state)=>state.userReducer.userInfo)
    return (
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
                    
                    {userInfo.role[0].name==="ADMIN" ?

                    <div> 
                    <b>Active : </b> 
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                    />

                    <div ><Button > Reset password </Button>   </div> 
                    </div> 
                    : 
                    
                    <></>
                   
                }
                    
                     
                </Col>
            </Row>

        </Card>
    </>
    )
        };
export default Student;

