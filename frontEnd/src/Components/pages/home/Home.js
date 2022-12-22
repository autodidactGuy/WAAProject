import React from 'react'
import SampleEchart from '../../Dashboards/SampleEchart'
import TenLastJobAdv from '../../Dashboards/TenLastJobAdv'
import RegisterForm from '../../register/registerform/RegisterForm';
import { Button, Checkbox, Form, Input, Row, Col, Spin } from 'antd';

function Home() {
  return (
    <div>
      <Row>
        <Col offset={1}>
          <TenLastJobAdv />
          <br/>
          <Row >
            <Col span={6}>
              <SampleEchart/>
            </Col>
            <Col span={6}>
              <SampleEchart/>
            </Col>
            <Col span={6}>
              <SampleEchart/>
            </Col>
            <Col span={6}>
              <SampleEchart/>
            </Col>
          </Row>
        </Col>
      </Row>
      
      
    </div>
  )
}

export default Home
