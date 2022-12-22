import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { getAccessToken } from '../../../redux/userReducer';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Adv from '../../Advertisement/Adv';
import { Button, Checkbox, Form, Input, Row, Col, Spin } from 'antd';

const Searchjob = () => {

  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();

  const [form] = Form.useForm();

  const getJobs = async(searchFilters)=>{
    if(getAccessToken()!=null){
        setIsLoggedIn(true);
        console.log(searchFilters);
        const response=await axios.post("/jobAdvertisement/filterJobs",searchFilters);
        setJobs(response.data);
    }
    else{

    }
}

const [jobs,setJobs] = useState([]);

const [isLoggedIn,setIsLoggedIn] = useState(false);

useEffect(()=>{
  
},[]);

const onFinish = (values) => {
  const searchJobs = {};

  if(values.company){
    searchJobs.companyName=values.company;
  }
  if(values.state){
    searchJobs.state=values.state;
  }
  if(values.city){
    searchJobs.cityCode=values.city;
  }
  
  console.log(values);

  getJobs(searchJobs);

  };

  return (
    <div>
      <div className='FilterDiv'>
      <Row className='filterForm'>
        <Col span={18} offset={1} className="mt-20">

          <Form
            name="search_jobs"
            className="search_jobs"
            form={form}
            onFinish={onFinish}
          >

          <Row>
            <Col >
              <Form.Item name="state">
                <Input placeholder="State"/>
              </Form.Item>

            
            </Col>
            <Col>
            <Form.Item name="city">
                <Input placeholder="City"/>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="company">
                <Input placeholder="Company Name"/>
              </Form.Item>
            </Col>
            <Col >
              <Form.Item name="tags">
                <Input placeholder="Tags" />
              </Form.Item>
            </Col>
            <Col >

              <Form.Item>
                <Button type="primary" htmlType="submit" className="search-form-button">
                  Filter Jobs
                </Button>
              </Form.Item>
              </Col>
          </Row>
        </Form>
      </Col>
      </Row>
      </div>

      <div className='jobs'>
        {
          (jobs.length>0)?
          <Row>
            <Col offset={1}>
              <h1>Jobs</h1>
              <Row >
                  {jobs.map(job => <Col  key={job.id}  xs={24} sm={12} md={12} lg={8} xl={6}> <Adv adv={job} /> </Col>)}
              </Row>
            </Col>
            </Row>
          :
          <>
          </>
        }
      </div>
    </div>
    
  )
}
export default Searchjob;
