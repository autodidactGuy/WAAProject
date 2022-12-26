import React, { useEffect, useState } from 'react';
import { Button, message, Modal } from 'antd';
import { useSelector } from 'react-redux';
import EditBasicInfoForm from './EditBasicInfoForm';
import { EditOutlined } from '@ant-design/icons';
import { stringToDate } from '../../Utils/Utils';

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
        
        <EditBasicInfoForm user={{...props.user, location:[[props.user.city?.id?.stateCode, props.user.city?.id?.cityName]], birthday: stringToDate(props.user.birthday)}}/>
      </Modal>
    </>
  );
};
export default BasicStudentInfoModal;