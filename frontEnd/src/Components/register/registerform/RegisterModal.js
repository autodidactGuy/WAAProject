import React, { useEffect, useState } from 'react';
import { Button, message, Modal } from 'antd';
import RegisterForm from './RegisterForm';
import { useSelector } from 'react-redux';
const RegisterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const registerstatus = useSelector((state) => state.userReducer.registerstatus);
   
  useEffect(()=>{
    if(registerstatus==="success")
    {
      setIsModalOpen(false);
      messageApi.open({
        type: 'success',
        content: 'Success!!! You can login now',
        duration: 3,
      });
    }
    else if(registerstatus==="rejected"){
      messageApi.open({
        type: 'error',
        content: 'Error, please try again',
        duration: 3,
      });

    }
  },[registerstatus])
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
    {contextHolder}
      <Button type="primary" onClick={showModal}>
        Register
      </Button>
      < Modal title="Register" open={isModalOpen}  onCancel={handleCancel}
      footer={[
          <Button key="cancelregister" onClick={handleCancel}>
            Cancel
          </Button>]}
        width='40%'
      >
        <RegisterForm/>
      </Modal>
    </>
  );
};
export default RegisterModal;