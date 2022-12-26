import React, { useEffect, useState } from 'react';
import { Button, message, Modal } from 'antd';
import { useSelector } from 'react-redux';
import EditBasicInfoForm from './EditBasicInfoForm';
import { EditOutlined } from '@ant-design/icons';

const BasicStudentInfoModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
//   const newuser =
//   {
//     major:values.major,
//     firstname: values.firstname,
//     lastname: values.lastname,
//     email: values.email,
//     password: values.password,
//     nickname: values.nickname,
//     phone: values.phone,
//     gender: values.gender,
//     role: values.role,
//     birthday: Moment(values.birthday).format("YYYY-MM-DD"),
//     stateCode:values.residence[0],
//     cityCode: values.residence[1],
//     srcLogo:srcLogo
// }
 
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
 
      <Button icon={<EditOutlined />} type="primary" onClick={showModal}>
        edit profile
      </Button>
      < Modal title="edit profile" open={isModalOpen}  onCancel={handleCancel}
      footer={[
          <Button key="canceleditprofile" onClick={handleCancel}>
            Cancel
          </Button>]}
        width='40%'
      >
        
        <EditBasicInfoForm user={{...props.user, residence:[props.user.city?.id?.sateCode, props.user.city?.id?.cityName]}}/>
      </Modal>
    </>
  );
};
export default BasicStudentInfoModal;