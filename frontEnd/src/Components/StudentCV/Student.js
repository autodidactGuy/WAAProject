import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Avatar, Switch, Button, Space, Tooltip, message, Form, Input, Select } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Comment } from '@ant-design/compatible';   
import moment from 'moment';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { getAccessToken } from '../../redux/userReducer';
import { Option } from 'antd/es/mentions';

function Student (props)  {

    const [isActive,setIsActive] = useState(props.student.activated);

    const [studentComments,setStudentComments] = useState([]);

    const [isLoadingResetPassword,setIsLoadingResetPassword] = useState(false);

    const userInfo= useSelector((state)=>state.userReducer.userInfo)

    const baseurl = process.env.REACT_APP_API_URL;

    axios.defaults.baseURL=baseurl;
  
    axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();
    const [form]  = Form.useForm();
    const [formComment] = Form.useForm();
    const onReset = () => {
        form.resetFields();
      };

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

      async function resetUserPassword (value)  {
        console.log("reset user account password",value)
        setIsLoadingResetPassword(true)
        //AXIOS
        try {
          const result=await axios.post(`/user/${props.student.id}/resetPassword`,value);
          if (result.status === 200) {
            onReset();
            message.success("user password reset successfully");
          } else {
            message.error("error");
          }
        } catch (e) {
          message.error("error");
        } finally {
            setIsLoadingResetPassword(false)
        }
      };


      


      async function getStudentComment ()  {
        //AXIOS
        try {
          const result=await axios.get(`/comment/getCommentsByStudentId/${props.student.id}`);
          if (result.status === 200) {
            setStudentComments(result.data)
          } else {
            message.error("get student comment error");
          }
        } catch (e) {
          message.error("get student comment error");
        } finally {
        }
      };

      async function addComment (value)  {
        console.log("comment to add",value)
        setIsLoadingResetPassword(true)
        //AXIOS
        try {
          const result=await axios.post(`/comment/saveComments`,{toStudentId:props.student.id, comment:value.comment});
          if (result.status === 200) {
            onReset();
            getStudentComment();
            message.success("comment added successfully");

          } else {
            message.error("error");
          }
        } catch (e) {
          message.error("error");
        } finally {
            setIsLoadingResetPassword(false)
        }
      };


      useEffect(()=>{
        if(userInfo.role[0].name==="FACULTY")
        {
          getStudentComment();
        }

      },[]);

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

                    <div>          
                        <Form form={form} onFinish={resetUserPassword} name="resetpassword" >
                        <Form.Item >
                                    <Input.Group compact>
                                    <Form.Item
                                        name="password"
                                        noStyle
                                        rules={[
                                        {
                                            required: true,
                                            message: 'new password required is required',
                                        },
                                        ]}
                                    >
                                        <Input.Password
                                        style={{
                                            width: '50%',
                                        }}
                                        placeholder="new password"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="reset"
                                        noStyle
                                    >
                                        <Button loading={isLoadingResetPassword} type="primary" htmlType="submit" className="login-form-button"> reset password </Button>
                                    </Form.Item>
                                    </Input.Group>
                                </Form.Item>
                        </Form>
                    </div> 
                    </div> 
                    : 
                    <></>
                    }
                    
                    {userInfo.role[0].name==="FACULTY" ?

                        <div> 
                        <Form form={formComment} onFinish={addComment} name="addcomment" >
                        <Form.Item >
                                    <Input.Group compact>
                                    <Form.Item
                                        name="comment"
                                        noStyle
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Comment is required',
                                        },
                                        ]}
                                    >
                                        <Input
                                        style={{
                                            width: '50%',
                                        }}
                                        placeholder="New comment"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="reset"
                                        noStyle
                                    >
                                        <Button type="primary" htmlType="submit" className="login-form-button"> Add comment </Button>
                                    </Form.Item>
                                    </Input.Group>
                                </Form.Item>
                        </Form>
                        {
                          studentComments.map(c => {
                            console.log('comment ',c);
                            return (
                            <Comment
                            author={<div>Faculty id : {c.writedByFacultyId}</div>}
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                            content={
                                <p>
                                {c.comment}
                                </p>
                            }
                            datetime={
                                <Tooltip title="2016-11-22 11:22:33">
                                <span>8 hours ago</span>
                                </Tooltip>
                            }
                            />
                            )
                          })
                        }
                        

                     
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

