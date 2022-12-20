import React, { useState } from 'react';
import { Button, Modal } from 'antd';
 
 
import WorkExperienceEdit from './WorkExperienceEdit';

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
        <Button size='small' type="primary" onClick={showModal}>
          Edit
        </Button>
        
        <Modal title="Add exeprience" open={isModalOpen}  onCancel={handleCancel}
        footer={[
            <Button key="canceladdexperience" onClick={handleCancel}>
              Cancel
            </Button>]}
        >
          <WorkExperienceEdit workExperience={props.jobToUpdate} isAdd={false}/>
          
        </Modal>
      </>
    );
}

export default UpdateExperienceModal
