import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
 
 
import EducationEdit from './EducationEdit';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

function AddEducationModal() {
  const addEducationStatus = useSelector((state) => state.educationReducer.addEducationstatus);
  
  useEffect(()=>{
    if(addEducationStatus==="success" )
    {
      setIsModalOpen(false);
      
    }
    

  },[addEducationStatus])
  
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
