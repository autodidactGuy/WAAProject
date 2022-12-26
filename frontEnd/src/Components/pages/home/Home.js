import React from 'react'
import TenLastJobAdv from '../../Dashboards/TenLastJobAdv'
import { Button, Checkbox, Form, Input, Row, Col, Spin } from 'antd';
import ECharts from '../../Dashboards/ECharts';
import TenLastJobAdvApplied from '../../Dashboards/TenLastJobAdvApplied';


function Home() {


  return (
    <div>
      <Row>
        <Col span={22} offset={1}>
          <ECharts/>
        </Col>
      </Row>
      
      
    </div>
  )
}

export default Home
