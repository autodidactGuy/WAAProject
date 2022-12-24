import React, { useState } from 'react';
import { Card, Col, Row, Avatar, Button, message, Tag  } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined, CheckCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getAccessToken } from '../../redux/userReducer';

const Adv = (props) => {
    const [isAppliedLocally,setIsAppliedLocally] = useState(false);
    const userInfo= useSelector((state)=>state.userReducer.userInfo)

    const baseurl = process.env.REACT_APP_API_URL;

    axios.defaults.baseURL=baseurl;
  
    axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();

    async function handleApplyJob ()  {
        //isLoading = true;
        //AXIOS
        try {
          const result=await axios.get(`/userApplication/apply/${props.adv.id}`);
          if (result.status === 200) {
            message.success("Applyed successfully");
            setIsAppliedLocally(true);
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


                    <div> {props.adv.profile} </div>
                    <div style={{ color: 'gray', fontSize: '12px' }}> <CalendarOutlined /> {moment(props.adv.publicationDate).format("MM-DD-YYYY")} </div>


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
                    <div> <EnvironmentOutlined /> {props.adv.city?.cityName}, {props.adv.city?.stateCode} </div>
                    <div className='oneLineText'> {props.adv.description} </div>
                    {userInfo.role[0].name==="STUDENT" ?
                        props.isApplied || isAppliedLocally  ? 
                        <Tag icon={<CheckCircleOutlined />} color="success">
                            Applied
                        </Tag>
                        :
                        <div ><Button onClick={handleApplyJob}> Apply </Button>   </div>
                    : 
                    <></>
                    }
                </Col>
            </Row>


        </Card>
    </>
)
    
}
    ;
export default Adv;

