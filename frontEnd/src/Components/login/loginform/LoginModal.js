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
        Open Modal
      </Button>
      <Modal title="Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <LoginForm/>
      </Modal>
    </>
  );
};
export default LoginModal;