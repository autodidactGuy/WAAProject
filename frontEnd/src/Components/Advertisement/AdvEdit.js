import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Avatar, Button, Form, Input, InputNumber, Cascader, Select, Spin   } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { addAdvertisement, updateAdvertisement } from '../../redux/advertisementReducer';
import { getLocations } from '../../redux/locationReducer';
import { advFromFront2API, advFromFront2APIWithId, convertListTagsApiToFront } from './../../Utils/Utils';
import { message } from 'antd';
import { getAccessToken } from '../../redux/userReducer';
import axios from 'axios';


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
 
  const addAdvertisementstatus = useSelector((state) => state.advertisementReducer.addAdvertisementstatus);
  const updateAdvertisementstatus = useSelector((state) => state.advertisementReducer.updateAdvertisementstatus);
   
  const baseurl = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL=baseurl;

  axios.defaults.headers.common["Authorization"] = "Bearer "+getAccessToken();

  const [allTags,setAllTags] = useState([]);
  const [advTags,setAdvTags] = useState([]);
  const userInfo= useSelector((state)=>state.userReducer.userInfo);
  const dispatch = useDispatch();
  const locations = useSelector((state)=>state.locationReducer.locations)

  const getTags = async()=>{
    if(getAccessToken()!=null){
        const response=await axios.get("/tag");
        const convertResponse = convertListTagsApiToFront(response.data)
        console.log('converted tag : ',convertResponse);
        setAllTags(convertResponse)
        let tempMyTags = [];

        //convertResponse.forEach(tag => {if(tag.isSubscribed){tempMyTags.push(tag.title)}})
        console.log('adv tags', props.adv.Tags)
        setAdvTags(props.adv.Tags)
    }
    else{

    }
}



  const [form] = Form.useForm();



  const filter = 
  (inputValue, path) =>
  path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  
  useEffect(()=>{
    if(locations.length===0){
      dispatch(getLocations());

    }

    if(allTags.length ===0){
      getTags();
    }

    if(!props.isAdd){
      onFill();
    }

  },[])

  const onFill = () => {

    console.log('adv received ', props.adv)
    form.setFieldsValue(props);
  };

    const onFinish = (values) => {
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
            let advToUpdate=advFromFront2APIWithId(values.adv, props.adv.Id, userInfo.id);

            dispatch(updateAdvertisement(advToUpdate));
        }

      };

      async function handleChangeAdvTags (value)  {

            setAdvTags(value)

      };



      if(addAdvertisementstatus==="pending"||updateAdvertisementstatus==="pending")
      return(
        <Spin tip="Loading" size="large">
        <div className="content" />
       </Spin>
      );
      else

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
                <Form.Item name={['adv', 'Workload']} label="Workload" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['adv', 'Contract']} label="Contract" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['adv', 'Description']} label="Description" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['adv', 'Tags']} label="Tags" >
                    <Select
                    mode="multiple"
                    style={{
                    width: '100%',
                    }}
                    value={advTags}
                    placeholder="Select tags"
                    onChange={handleChangeAdvTags}
                    options={allTags}
            />
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

