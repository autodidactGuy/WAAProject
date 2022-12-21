import React, { useState } from 'react';
import { Button, Modal } from 'antd';
 
 
import EducationEdit from './EducationEdit';

function AddEducationModal() {
  
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
          Add Education
        </Button>
        
        <Modal title="Add education" open={isModalOpen}  onCancel={handleCancel}
        footer={[
            <Button key="canceladdeducation" onClick={handleCancel}>
              Cancel
            </Button>]}
        >
          <EducationEdit isAdd={true}  />
          
        </Modal>
      </>
    );
}

export default AddEducationModal
