import React, { useEffect } from 'react';
import { Card, Col, Row, Avatar, Button, Form, Input, InputNumber, Cascader   } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { addAdvertisement, updateAdvertisement } from '../../redux/advertisementReducer';
import { getLocations } from '../../redux/locationReducer';
import { advFromFront2API } from './../../Utils/Utils';


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
  const userInfo= useSelector((state)=>state.userReducer.userInfo);
  const dispatch = useDispatch();
  const locations = useSelector((state)=>state.locationReducer.locations)

  const [form] = Form.useForm();



  const filter = 
  (inputValue, path) =>
  path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  
  useEffect(()=>{
    if(locations.length===0){
      dispatch(getLocations());
    }

  },[])

  const onFill = () => {

    console.log('adv received ', props.adv)
    form.setFieldsValue(props);
  };

    const onFinish = (values) => {
        console.log("value:",values);
        if(props.isAdd)
        {
            //Add
            const newAdvertisement=advFromFront2API(values.adv);
            console.log("add valu.adv adv:" , values.adv);
            console.log("add adv new :" ,newAdvertisement);
            dispatch(addAdvertisement(newAdvertisement));
        }
        else 
        {
            //Update
            const advToUpdate={
              ...values.adv,
              id:props.item.id
            };
            dispatch(updateAdvertisement(advToUpdate));
        }

      };


      onFill();

    return (
        <>
        <Row>
             <Col span={24} offset={0}>
            <h1 style={{textAlign: 'center'}}>  {props.isAdd ? "Add " : "Update "}  Job advertisement </h1>

            <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
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

