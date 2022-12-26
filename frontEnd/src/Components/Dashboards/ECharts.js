import React,{useEffect,useState} from 'react';
import SampleEchart from './SampleEchart';
import axios from 'axios';
import { getAccessToken } from '../../redux/userReducer';
import { useDispatch ,useSelector} from "react-redux";

import { Button, Checkbox, Form, Input, Row, Col, Spin } from 'antd';

function ECharts() {

    const loginstatus = useSelector((state) => state.userReducer.isLogged);

  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();

    const [jobsPerLocation,setJobsPerLocation] = useState([]);
    const [studentsPerState,setStudentsPerState] = useState([]);
    const [studentsPerCity,setStudentsPerCity] = useState([]);
    const [advertisementsPerTag,setAvdertisementsPerTag] = useState([]);
    const [numberOfTagsPerLocation,setNumberOfTagsPerLocation] = useState([]);
    const [numberOfAdPerTag,setNumberOfAdPerTag] = useState([]);
    const [avgGapPerGpa,setAvgGapPerGpa] = useState([]);
    const [numOfAdsPerMonth,setNumOfAdsPerMonth] = useState([]);
    const [numOfStudentByGender,setNumOfStudentByGender] = useState([]);
    const [numOfStuPerAge,setNumOfStuPerAge] = useState([]);
    const [appliedJobNumPerMonth,setAppliedJobNumPerMonth] = useState([]);



    const [isLoadingjobsPerLocation,setisloadingJobsPerLocation] = useState(false);
    const [isloadingstudentsPerState,setisloadingStudentsPerState] = useState(false);
    const [isloadingstudentsPerCity,setisloadingStudentsPerCity] = useState(false);
    const [isloadingadvertisementsPerTag,setisloadingAvdertisementsPerTag] = useState(false);
    const [isloadingnumberOfTagsPerLocation,setisloadingNumberOfTagsPerLocation] = useState(false);
    const [isloadingnumberOfAdPerTag,setisloadingNumberOfAdPerTag] = useState(false);
    const [isloadingavgGapPerGpa,setisloadingAvgGapPerGpa] = useState(false);
    const [isloadingnumOfAdsPerMonth,setisloadingNumOfAdsPerMonth] = useState(false);
    const [isloadingnumOfStudentByGender,setisloadingNumOfStudentByGender] = useState(false);
    const [isloadingnumOfStuPerAge,setisloadingNumOfStuPerAge] = useState(false);
    const [isloadingappliedJobNumPerMonth,setisloadingAppliedJobNumPerMonth] = useState(false);
    

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        getJobsPerLocation();
        getStudentsPerState();
        getStudentsPerCity();
        getAdertisementsPerTag();
        getNumberOfTagsPerLocation();
        getNumberOfAdPerTag();
        getAvgGapPerGpa();
        getNumOfAdsPerMonth();
        getNumOfStudentByGender();
        getNumOfStuPerAge();
        getAppliedJobNumPerMonth();
    },[]);


  const getJobsPerLocation = async()=>{
        const response=await axios.get("/echart/getJobAdvertisementsPerLocation");
        setJobsPerLocation(response.data);
    }

    const getStudentsPerState = async()=>{
            const response=await axios.get("/echart/getStudentsNumberPerState");
            setStudentsPerState(response.data);
    }

    const getStudentsPerCity = async()=>{
        const response=await axios.get("/echart/getStudentsNumberPerCity?stateCode=PR");
        setStudentsPerCity(response.data);
    }

    const getAdertisementsPerTag = async()=>{
      const response=await axios.get("/echart/getAdertisementsPerTag");
      setAvdertisementsPerTag(response.data);
  }

  const getNumberOfTagsPerLocation = async()=>{
    const response=await axios.get("/echart/numberOfTagsPerLocation");
    setNumberOfTagsPerLocation(response.data);
}

const getNumberOfAdPerTag = async()=>{
  const response=await axios.get("/echart/numberOfAdPerTag");
  setNumberOfAdPerTag(response.data);
}
  

const getAvgGapPerGpa = async()=>{
  const response=await axios.get("/echart/avgGapPerGpa");
  setAvgGapPerGpa(response.data);
}

const getNumOfAdsPerMonth = async()=>{
  const response=await axios.get("/echart/numOfAdsPerMonth");
  setNumOfAdsPerMonth(response.data);
}

const getNumOfStudentByGender = async()=>{
  const response=await axios.get("/echart/numOfStudentByGender");
  setNumOfStudentByGender(response.data);
}

const getNumOfStuPerAge = async()=>{
  const response=await axios.get("/echart/numOfStuPerAge");
  setNumOfStuPerAge(response.data);
}

const getAppliedJobNumPerMonth = async()=>{
  const response=await axios.get("/echart/getAppliedJobNumPerMonth");
  setAppliedJobNumPerMonth(response.data);
}






  return (

        <Row className='charts' >
        <Col span={11}>
            <SampleEchart title='Jobs per Location' data={jobsPerLocation.map(val=>{return val.jobAdvertisementCount; })} label={jobsPerLocation.map(val=>{return val.cityName+', '+val.stateCode; })}/>
        </Col>
        <Col span={11}>
        <SampleEchart title='Students per State' data={studentsPerState.map(val=>{return val.studentNumber; })} label={studentsPerState.map(val=>{return val.stateCode; })}/>
        </Col>
        <Col span={11}>
        <SampleEchart title='Students per City' data={studentsPerCity.map(val=>{return val.numberOfStudent; })} label={studentsPerCity.map(val=>{return val.cityName; })}/>
        </Col>
        </Row>
    
    
  )
}

export default ECharts
