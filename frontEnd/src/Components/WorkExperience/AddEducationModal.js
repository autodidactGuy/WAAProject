import React, { useState } from 'react';
import { Button, Modal } from 'antd';
 
 
import EducationEdit from './EducationEdit';
import { PlusOutlined } from '@ant-design/icons';

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
        <Button  icon={<PlusOutlined />} type="primary" onClick={showModal} style={{float: 'right'}}>
          Add
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
