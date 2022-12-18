import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import RegisterForm from './RegisterForm';
const RegisterModal = () => {
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
        Register
      </Button>
      < Modal title="Register" open={isModalOpen}  onCancel={handleCancel}
      footer={[
          <Button key="cancelregister" onClick={handleCancel}>
            Cancel
          </Button>]}
      >
        <RegisterForm/>
      </Modal>
    </>
  );
};
export default RegisterModal;