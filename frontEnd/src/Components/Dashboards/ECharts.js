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
    try {
      setisloadingJobsPerLocation(true)
      const response=await axios.get("/echart/getJobAdvertisementsPerLocation");
      setJobsPerLocation(response.data);
    } catch (e) {
      
    } finally {
      setisloadingJobsPerLocation(false);
    }
  };

    

    const getStudentsPerState = async()=>{
      try {
        setisloadingStudentsPerState(true);
        const response=await axios.get("/echart/getStudentsNumberPerState");
        setStudentsPerState(response.data);
      } catch (e) {
        
      } finally {
        setisloadingStudentsPerState(false);
      }
 
    }

    const getStudentsPerCity = async()=>{
            
            try {
              setisloadingStudentsPerCity(true);
              const response=await axios.get("/echart/getStudentsNumberPerCity?stateCode=PR");
              setStudentsPerCity(response.data);
            } catch (e) {
              
            } finally {
              setisloadingStudentsPerCity(false);
            }
    }




    const getAdertisementsPerTag = async()=>{

                      
                      try {
                        setisloadingAvdertisementsPerTag(true);
                        const response=await axios.get("/echart/getAdertisementsPerTag");
                        setAvdertisementsPerTag(response.data);
                      } catch (e) {
                        
                      } finally {
                        setisloadingAvdertisementsPerTag(false);
                      }


  }

  const getNumberOfTagsPerLocation = async()=>{
                      
                      try {
                        setisloadingNumberOfTagsPerLocation(true)
                        const response=await axios.get("/echart/numberOfTagsPerLocation");
                        setNumberOfTagsPerLocation(response.data);
                      } catch (e) {
                        
                      } finally {
                        setisloadingNumberOfTagsPerLocation(false)
                      }
}

const getNumberOfAdPerTag = async()=>{

                        
                        try {
                          setisloadingNumberOfAdPerTag(true)
                          const response=await axios.get("/echart/numberOfAdPerTag");
                          setNumberOfAdPerTag(response.data);
                        } catch (e) {
                          
                        } finally {
                          setisloadingNumberOfAdPerTag(false)
                        }


}
  




const getAvgGapPerGpa = async()=>{
                          
                          try {
                            setisloadingAvgGapPerGpa(true)
                            const response=await axios.get("/echart/avgGapPerGpa");
                            setAvgGapPerGpa(response.data);
                          } catch (e) {
                            
                          } finally {
                            setisloadingAvgGapPerGpa(true)
                          }

}

const getNumOfAdsPerMonth = async()=>{
                          
                          try {
                            setisloadingNumOfAdsPerMonth(true)
                            const response=await axios.get("/echart/numOfAdsPerMonth");
                            setNumOfAdsPerMonth(response.data);
                          } catch (e) {
                            
                          } finally {
                            setisloadingNumOfAdsPerMonth(false)
                          }

}

const getNumOfStudentByGender = async()=>{
                          
                          try {
                            setisloadingNumOfStudentByGender(true)
                            const response=await axios.get("/echart/numOfStudentByGender");
                            setNumOfStudentByGender(response.data);
                          } catch (e) {
                            
                          } finally {
                            setisloadingNumOfStudentByGender(false)
                          }

}

const getNumOfStuPerAge = async()=>{
                          
                          try {
                            setisloadingNumOfStuPerAge(true)
                            const response=await axios.get("/echart/numOfStuPerAge");
                            setNumOfStuPerAge(response.data);
                          } catch (e) {
                            
                          } finally {
                            setisloadingNumOfStuPerAge(false)
                          }

}

const getAppliedJobNumPerMonth = async()=>{

                          try {
                            setisloadingAppliedJobNumPerMonth(true)
                            const response=await axios.get("/echart/getAppliedJobNumPerMonth");
                            setAppliedJobNumPerMonth(response.data);
                          } catch (e) {
                            
                          } finally {
                            setisloadingAppliedJobNumPerMonth(false)
                          }

}






  return (

        <Row className='charts' >
        <Col span={24}>
            <SampleEchart title='Jobs per Location' data={jobsPerLocation.map(val=>{return val.jobAdvertisementCount; })} label={jobsPerLocation.map(val=>{return val.cityName+', '+val.stateCode; })}/>
        </Col>
        <Col span={24}>
        <SampleEchart title='Students per State' data={studentsPerState.map(val=>{return val.studentNumber; })} label={studentsPerState.map(val=>{return val.stateCode; })}/>
        </Col>
        <Col span={24}>
        <SampleEchart title='Students per City' data={studentsPerCity.map(val=>{return val.numberOfStudent; })} label={studentsPerCity.map(val=>{return val.cityName; })}/>
        </Col>
        </Row>
    
    
  )
}

export default ECharts
