import React, { useEffect, useState } from 'react';
import { Button, message, Modal } from 'antd';
import { useSelector } from 'react-redux';
import EditBasicInfoForm from './EditBasicInfoForm';
import { EditOutlined } from '@ant-design/icons';
import { stringToDate } from '../../Utils/Utils';

const BasicStudentInfoModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const editprofilestatus = useSelector((state) => state.userReducer.editprofilestatus);


  useEffect(()=>{
    if(editprofilestatus ==="success")
    {
      setIsModalOpen(false);
    }
    

  },[editprofilestatus])
 
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
 
      <Button icon={<EditOutlined />} type="primary" onClick={showModal}>
        edit profile
      </Button>
      < Modal title="edit profile" open={isModalOpen}  onCancel={handleCancel}
      footer={[
          <Button key="canceleditprofile" onClick={handleCancel}>
            Cancel
          </Button>]}
        width='40%'
      >
        
        <EditBasicInfoForm user={{...props.user, cityCode :props.user.city?.id?.cityName, stateCode : props.user.city?.id?.stateCode,  location:[props.user.city?.id?.stateCode, props.user.city?.id?.cityName], birthday: stringToDate(props.user.birthday)}}/>
      </Modal>
    </>
  );
};
export default BasicStudentInfoModal;