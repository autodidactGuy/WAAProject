import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Avatar, Button, Form, Input, InputNumber, Cascader, Select, Spin, Upload, Modal   } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { addAdvertisement, updateAdvertisement } from '../../redux/advertisementReducer';
import { getLocations } from '../../redux/locationReducer';
import { advFromFront2API, advFromFront2APIWithId, convertListTagsApiToFront } from './../../Utils/Utils';
import { message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { getAccessToken } from '../../redux/userReducer';
import axios from 'axios';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

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
  const [srcLogo, setSrcLogo] = useState(props.adv?.srcLogo);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const getFiles = () => 
  {
    if(props.isAdd)
    {
      return [];
    }
    else 
    {
      if(props.adv.srcLogo != null  && props.adv.srcLogo!=='' )
      {
        return  [{
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: props.adv?.srcLogo,
        }];
      }
      else 
      {
        return [];
      }
     
    }
  }

  const [fileList, setFileList] = useState(getFiles());

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const  handleChange = async ({ fileList: newFileList }) => 
  {
    setFileList(newFileList)
    if(newFileList.length>0)
    {
      let currentFile = newFileList[0];
      console.log('current file image: ',currentFile)
      let blobLogo = await getBase64(currentFile.originFileObj);

      setSrcLogo(blobLogo)
      //thumbUrl
    } 
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

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
        setAllTags(convertResponse)
        let tempMyTags = [];

        //convertResponse.forEach(tag => {if(tag.isSubscribed){tempMyTags.push(tag.title)}})
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
    form.setFieldsValue(props);
  };

    const onFinish = (values) => {

        let tagsToSend = [];
        allTags.forEach(t => {
          if(values.adv.Tags.includes(t.title))
          {
            tagsToSend.push({id:t.id, title:t.title, isSubscribed:true})
          }
        })

        if(props.isAdd)
        {
            //Add
            const newAdvertisement=advFromFront2API({...values.adv, Tags:tagsToSend, srcLogo:srcLogo});
            dispatch(addAdvertisement(newAdvertisement));
        }
        else 
        {
            //Update
            let advToUpdate=advFromFront2APIWithId({...values.adv, Tags:tagsToSend, srcLogo:srcLogo}, props.adv.Id, userInfo.id);
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
                <Form.Item name={['adv', 'srcLogo']} label="Company logo" >
                <ImgCrop rotate minZoom={0.3}>
                <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                  </Upload>
                  </ImgCrop>
                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                      <img
                        alt="example"
                        style={{
                          width: '100%',
                        }}
                        src={previewImage}
                      />
                    </Modal>
                </Form.Item>
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

