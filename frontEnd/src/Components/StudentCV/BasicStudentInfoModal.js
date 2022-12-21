import React, { useEffect, useState } from 'react';
import { Button, message, Modal } from 'antd';
import { useSelector } from 'react-redux';
import EditBasicInfoForm from './EditBasicInfoForm';
const BasicStudentInfoModal = () => {
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
        edit profile
      </Button>
      < Modal title="edit profile" open={isModalOpen}  onCancel={handleCancel}
      footer={[
          <Button key="canceleditprofile" onClick={handleCancel}>
            Cancel
          </Button>]}
        width='40%'
      >
        
        <EditBasicInfoForm/>
      </Modal>
    </>
  );
};
export default BasicStudentInfoModal;