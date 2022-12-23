import React from 'react'
import TenLastJobAdv from '../../Dashboards/TenLastJobAdv'
import { Button, Checkbox, Form, Input, Row, Col, Spin } from 'antd';
import ECharts from '../../Dashboards/ECharts';


function Home() {


  return (
    <div>
      <Row>
        <Col offset={1}>
          <TenLastJobAdv />
          <br/>
          <ECharts/>
        </Col>
      </Row>
      
      
    </div>
  )
}

export default Home
