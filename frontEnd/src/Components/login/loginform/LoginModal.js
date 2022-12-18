import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import LoginForm from './LoginForm';
const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        Login
      </Button>
      
      <Modal title="Login" open={isModalOpen}  onCancel={handleCancel}
      footer={[
          <Button key="cancelLogin" onClick={handleCancel}>
            Cancel
          </Button>]}
      >
        <LoginForm/>
      </Modal>
    </>
  );
};
export default LoginModal;