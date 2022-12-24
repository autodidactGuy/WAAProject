import React, { useState } from 'react';
import { Card, Col, Row, Avatar, Switch, Button, Space, Tooltip, message } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Comment } from '@ant-design/compatible';   
import moment from 'moment';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { getAccessToken } from '../../redux/userReducer';

function Student (props)  {

    const [isActive,setIsActive] = useState(props.student.activated);


    const userInfo= useSelector((state)=>state.userReducer.userInfo)

    const baseurl = process.env.REACT_APP_API_URL;

    axios.defaults.baseURL=baseurl;
  
    axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();

    async function enableDisableUserAccount (value)  {


        console.log("enable disable account",value)
        //isLoading = true;
        //AXIOS
        try {
          const result=await axios.post(`/user/${value.id}/changeActiveStatu`);
          if (result.status === 200) {
    
            setIsActive(!isActive)
            message.success("Enable disable account successfully");


          } else {
            message.error("error");
          }
        } catch (e) {
          message.error("error");
        } finally {
          //isLoading = false;
        }
      };


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
                        checked={isActive}
                        onClick={() => enableDisableUserAccount(props.student)}
                    />

                    <div ><Button > Reset password </Button>   </div> 
                    </div> 
                    : 
                    <></>
                    }
                    
                    {userInfo.role[0].name==="FACULTY" ?

                        <div> 
                        <div ><Button > Add comment </Button>   </div>
                        <Comment
                            author={<a>Han Solo</a>}
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                            content={
                                <p>
                                We supply a series of design principles, practical patterns and high quality design
                                resources (Sketch and Axure), to help people create their product prototypes beautifully
                                and efficiently.
                                </p>
                            }
                            datetime={
                                <Tooltip title="2016-11-22 11:22:33">
                                <span>8 hours ago</span>
                                </Tooltip>
                            }
                            />

                     
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

