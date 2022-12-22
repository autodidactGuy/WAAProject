import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
 
 
import WorkExperienceEdit from './WorkExperienceEdit';
import { EditOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

function UpdateExperienceModal(props) {

  const addJobStatus = useSelector((state) => state.jobEReducer.addjobEstatus);
  const updatejobtatus = useSelector((state) => state.jobEReducer.updatejobtatus);
   
  useEffect(()=>{
    if(addJobStatus==="success" || updatejobtatus==="success" )
    {
      setIsModalOpen(false);
      
    }
  },[addJobStatus,updatejobtatus])
 

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
