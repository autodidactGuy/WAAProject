import React, { useState } from 'react';
import { Button, Modal } from 'antd';
 
import LoginForm from '../login/loginform/LoginForm';

function AddExperienceModal() {
  
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
          Add WorkExperience
        </Button>
        
        <Modal title="Add exeprience" open={isModalOpen}  onCancel={handleCancel}
        footer={[
            <Button key="canceladdexperience" onClick={handleCancel}>
              Cancel
            </Button>]}
        >
          <LoginForm/>
          
        </Modal>
      </>
    );
}

export default AddExperienceModal
