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
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAh1BMVEX///8ApO/yUCJ/ugD/uQD84dv/+u/+8/D/twD2iXF8uADzUBv/y00Aou//wBn/7snv+f73+u/h7snX7vzJ6fv3++ymzmXyShahzE2LwBno89dNvfNlv/MApu8ZrPD96eX/0Fv/89b4rJu924au0m3xRATu9uD8/v+G0Pfg8/3/2XttxPT/xi/dU5jdAAABYklEQVR4nO3cSVICURREUVBREaQRFcUGsMNu/+tz9qsGv4YZhnLuBjJOvPnr9SRJ0j50kq6Zml+Fq/qehuHWxfd8ne1lVQMOX5fZBgV4c5bt9qIKXB5EG7WBh9EAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQG76/xOOcrWAkZ9HRfsrQfhmqm3Vbh5DShJ0j43S7crU8fpqr73u3Afxfc5zrbZ1oD359n6iwIcn2abTOvAfrSHNvAoGSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDgXwf+xnfKr8dwDXAzyfZdA+4Wl+FmZWs7DVd9EStJkv5bP2+4QdB1EE8RAAAAAElFTkSuQmCC"
                    icon={<UserOutlined />} />
                </Col>
                <Col style={{marginLeft:'5px'}}>
                    <div> Campany : {props.adv.companyName} </div>
                    <div> <EnvironmentOutlined /> {props.adv.city?.cityName}, {props.adv.city?.stateCode} </div>
                    <div className='oneLineText'> {props.adv.description} </div>
                    {userInfo.role[0].name==="STUDENT" && !props.lockApply ?
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

