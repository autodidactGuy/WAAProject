import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { TenJobAdv } from '../../Data/TenJobAdv';
import { getAccessToken} from '../../redux/userReducer';
import axios from 'axios';
import { useDispatch ,useSelector} from "react-redux";

import Adv from '../Advertisement/Adv'

const TenLastJobAdv = () => {

    const loginstatus = useSelector((state) => state.userReducer.isLogged);

    const baseurl = process.env.REACT_APP_API_URL;

    axios.defaults.baseURL=baseurl;

    axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();



    const getJobs = async()=>{
        if(getAccessToken()!=null){
            setIsLoggedIn(true);
            const response=await axios.get("/jobAdvertisement/top10Advertisement");
            setTop10Jobs(response.data);
        }
        else{

        }
    }

    const [top10jobs,setTop10Jobs] = useState([]);

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        getJobs();
    },[]);
    return(
        (loginstatus)?
        <>
            <h1 style={{margin:'15px'}}> Top 10 Job Advertisements </h1>
            <Row>
                {top10jobs.map(adv => <Col key={adv.id} xs={24} sm={24} md={24} lg={24} xl={24}> <Adv adv={adv} lockApply={true} /> </Col>)}
            </Row>
        </>
        :
        <>
            <h1 style={{margin:'15px',textAlign:'center'}}> Please login to view </h1>
        </>
    );
    
    }
export default TenLastJobAdv;