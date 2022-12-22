import React, { useEffect } from 'react';
import { Card, Col, Row, Avatar, Button, Form, Input, InputNumber, Cascader   } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { addAdvertisement } from '../../redux/advertisementReducer';
import { getLocations } from '../../redux/locationReducer';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const AdvEdit = (props) => {
  const dispatch = useDispatch();
  const locations = useSelector((state)=>state.locationReducer.locations)
  const filter = 
  (inputValue, path) =>
  path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  
  useEffect(()=>{
    if(locations.length===0){
      dispatch(getLocations());
    }

  },[])
    const onFinish = (values) => {
        console.log(values);
        if(props.isAdd)
        {
            //Add
            const newAdvertisement=values.adv;
            console.log("newAdvertisement to add:",newAdvertisement)
            dispatch(addAdvertisement(newAdvertisement));
        }
        else 
        {
            //Update
        }

      };
    return (
        <>
        <Row>
             <Col span={24} offset={0}>
            <h1 style={{textAlign: 'center'}}>  {props.isAdd ? "Add " : "Update "}  Job advertisement </h1>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['adv', 'Title']} label="Job Title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                  name={['adv', 'location']}
                  label="location"
                  rules={[
                    {
                      type: 'array',
                      required: true,
                      message: 'Please select the location',
                    },
                  ]}
                >
                  <Cascader options={locations} 
                  
                  showSearch={{
                    filter,
                  }}
                  />
                </Form.Item>
                <Form.Item name={['adv', 'CompanyName']} label="CompanyName" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['adv', 'Description']} label="Description" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        { props.isAdd ? "Add " : "Update " }
                    </Button>
                </Form.Item>
        </Form>
        </Col>
        </Row>
        </>
    );
}


export default AdvEdit;

