import React, { useEffect, useState } from 'react';
import { Button, message, Modal } from 'antd';
import RegisterForm from './RegisterForm';
import { useSelector } from 'react-redux';
const RegisterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const registerstatus = useSelector((state) => state.userReducer.registerstatus);
   
  useEffect(()=>{
    if(registerstatus==="success")
    {
      setIsModalOpen(false);
       console.log("again")
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