import React, { useEffect, useState } from 'react';
import { getLocations } from '../../redux/locationReducer';
import { useDispatch, useSelector } from "react-redux";
import ImgCrop from 'antd-img-crop';

import Moment from 'moment'
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  DatePicker,
  Spin,
  Upload,
  Modal
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

function EditBasicInfoForm(props) {
  const [srcLogo, setSrcLogo] = useState(props.adv?.srcLogo);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const getFiles = () => 
  {

      if(props.user.srcLogo != null  && props.user.srcLogo!=='' )
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
  console.log('user info a modifié ', props.user)


    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const locations = useSelector((state)=>state.locationReducer.locations)
    const getLocationStatus = useSelector((state)=>state.locationReducer.getLocationStatus)



      const filter = (inputValue, path) =>
  path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

  const onFill = () => {
    form.setFieldsValue(props.user);
  };

  useEffect(()=>{
    onFill();
    if(locations.length === 0)
    {
      dispatch(getLocations());
    }

},[]);

    const onFinish = (values) => {
        
        
    
      
        };

        
  return (
    <div>
      <Row>
    <Col span={24} offset={0}>
    <Form 

      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['state', 'city'],
      }}
      scrollToFirstError
    >
      
      <Form.Item name="srcLogo" label="Avatar" >
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


    <Form.Item
        name="firstName"
        label="First name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last name"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="birthday" label="Birthday" 
          rules= { [
            {
              type: 'object',
              required: true,
              message: 'Please input your birthday!',
            },
          ]}>
        <DatePicker style={{
            width: '100%',
          }}/>
      </Form.Item> 

      <Form.Item
        name="nickName"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="location"
        label="Habitual Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={locations} placeholder="State / City"
        
        showSearch={{
          filter,
        }}
        />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
           
          style={{
            width: '100%',
          }}
        />
      </Form.Item>


      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
    </Col>
    </ Row>
    </div>
  )
}

export default EditBasicInfoForm
