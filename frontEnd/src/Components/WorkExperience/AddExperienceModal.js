import React, { useState } from 'react';
import { Button, Modal } from 'antd';
 
 
import WorkExperienceEdit from './WorkExperienceEdit';
import { PlusOutlined } from '@ant-design/icons';

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
        <Button  icon={<PlusOutlined />}  type="primary" onClick={showModal} style={{float: 'right'}}>
          Add
        </Button>
        
        <Modal title="Add exeprience" open={isModalOpen}  onCancel={handleCancel}
        footer={[
            <Button key="canceladdexperience" onClick={handleCancel}>
              Cancel
            </Button>]}
        >
          <WorkExperienceEdit isAdd={true}  />
          
        </Modal>
      </>
    );
}

export default AddExperienceModal
