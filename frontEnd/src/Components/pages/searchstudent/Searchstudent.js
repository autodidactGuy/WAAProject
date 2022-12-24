import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { getAccessToken } from '../../../redux/userReducer';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Student from '../../StudentCV/Student';
import { Button, Checkbox, Form, Input, Row, Col, Spin } from 'antd';
import { useSelector } from 'react-redux';

const Searchstudent = () => {

  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();

  const [form] = Form.useForm();

  const getStudents = async(searchFilters)=>{
    if(getAccessToken()!=null){
        setIsLoggedIn(true);
        console.log(searchFilters);
        const response=await axios.post("/student/filterStudents",searchFilters);
        setStudents(response.data);
    }
    else{

    }
}

const [students,setStudents] = useState([]);

const [isLoggedIn,setIsLoggedIn] = useState(false);

useEffect(()=>{
  
},[]);

const onFinish = (values) => {
  const searchStudent = {};

  if(values.major){
    searchStudent.major=values.major;
  }
  if(values.name){
    searchStudent.name=values.name;
  }
  if(values.state){
    searchStudent.state=values.state;
  }
  if(values.city){
    searchStudent.city=values.city;
  }
  if(values.studentId){
    searchStudent.studentId=values.studentId;
  }
  
  console.log(values);

  getStudents(searchStudent);

  };

  return (
    <div>
      <div className='FilterDiv'>
      <Row className='filterForm'>
        <Col span={18} offset={1} className="mt-20">

          <Form
            name="search_student"
            className="search_student"
            form={form}
            onFinish={onFinish}
          >

          <Row>
            <Col span={24}>
              <Form.Item name="state">
                <Input placeholder="State"/>
              </Form.Item>

            
            </Col>
          </Row>

          <Row>
            <Col span={24}>
            <Form.Item name="city">
                <Input placeholder="City"/>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item name="major">
                <Input placeholder="Major"/>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item name="name">
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
          </Row>


          <Row>
            <Col span={24}>
            <Form.Item name="studentId">
                <Input placeholder="Student ID" />
              </Form.Item>
            </Col>
          </Row>
            

              
          <Row>
            <Col span={24}>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="search-form-button">
                  Filter Students
                </Button>
              </Form.Item>
            </Col>
          </Row>

          


        </Form>
      </Col>
      </Row>
      </div>

      <div className='Students'>
        {
          (students.length>0)?
          <Row>
            <Col offset={1}>
              <h1>Students</h1>
              <Row >
                  {students.map(student => <Col  key={student.id}  xs={24} sm={24} md={24} lg={24} xl={24}> <Student student={student} /> </Col>)}
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
export default Searchstudent;
