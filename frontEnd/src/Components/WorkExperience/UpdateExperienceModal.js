import React, { useState } from 'react';
import { Button, Modal } from 'antd';
 
 
import WorkExperienceEdit from './WorkExperienceEdit';
import { EditOutlined } from '@ant-design/icons';

function UpdateExperienceModal(props) {
   
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
        <Button icon={<EditOutlined />} size='small' type="primary" onClick={showModal}>
          Edit
        </Button>
        
        <Modal title="Edit exeprience" open={isModalOpen}  onCancel={handleCancel}
        footer={[
            <Button key="canceleditexperience" onClick={handleCancel}>
              Cancel
            </Button>]}
        >
          <WorkExperienceEdit workExperience={props.jobToUpdate} isAdd={false}/>
          
        </Modal>
      </>
    );
}

export default UpdateExperienceModal
