import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
 
 
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import EducationEdit from '../../WorkExperience/EducationEdit';
import AdvEdit from '../../Advertisement/AdvEdit';
import { useDispatch, useSelector } from 'react-redux';

function AddEditJobAdvertisementModal(props) {
  const dispatch = useDispatch();
  const addAdvertisementstatus = useSelector((state) => state.advertisementReducer.addAdvertisementstatus);
  const updateAdvertisementstatus = useSelector((state) => state.advertisementReducer.updateAdvertisementstatus);
   
 
  useEffect(()=>{
    if(
      (addAdvertisementstatus!="pending" && updateAdvertisementstatus!="pending")
      &&
      (addAdvertisementstatus==="success" || updateAdvertisementstatus==="success")
      )
    {
      setIsModalOpen(false);
    }
  },[addAdvertisementstatus , updateAdvertisementstatus])

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
    
    const getIcon = () => {
      if(props.isAdd)
      {
        return <PlusOutlined />
      }
      else 
      {
        return <EditOutlined />
      }
    } 

   const getType = () => {
    if(props.isAdd)
    {
      return "primary"
    }
    else 
    {
      return "default"
    }
   }

   const getSize = () => {
    if(props.isAdd)
    {
      return "default"
    }
    else 
    {
      return "small"
    }
   }

    return (
      <>
        <Button  size={getSize()} icon={getIcon()} type={getType()} onClick={showModal} style={{float: 'right'}}>
          {props.isAdd ? 'Add' : 'Edit'}
        </Button>
        
        <Modal open={isModalOpen}  onCancel={handleCancel}
        footer={[
            <Button key="canceladdeducation" onClick={handleCancel}>
              Cancel
            </Button>]}
        >
          <AdvEdit adv={props.adv} isAdd={props.isAdd}  />
          
        </Modal>
      </>
    );
}

export default AddEditJobAdvertisementModal
