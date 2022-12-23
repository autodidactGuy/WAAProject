import React from 'react'
import BasicStudentInfo from '../../StudentCV/BasicStudentInfo'
import EducationList from '../../WorkExperience/EducationList'
import WorkExperienceList from '../../WorkExperience/WorkExperienceList'
import { Row, Col, Divider } from 'antd';
import UserTags from './../../Tags/UserTags';
import { useSelector } from 'react-redux';

function MyProfile() {
  const userInfo= useSelector((state)=>state.userReducer.userInfo)

  return (
    <Row style={{marginTop:'10px'}}>
      <Col xs={{ span: 23, offset: 1 }} sm={{ span: 20, offset: 4 }} md={{ span: 18, offset: 6 }}  lg={{ span: 12, offset: 6 }} xl={{ span: 12, offset: 6 }}  xxl={{ span: 12, offset: 6 }} >
      <BasicStudentInfo/>
      
      {
        userInfo.role[0].name==="STUDENT" ? <><Divider plain  > Experience </Divider>
        <WorkExperienceList/>
        <Divider plain  > Education </Divider>
        <EducationList/>
        <Divider plain  > Tags </Divider>
        <UserTags/></> : <></>
      }
      
      
      </Col>
    </Row>
  )
}

export default MyProfile
