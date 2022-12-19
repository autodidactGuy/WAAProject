import React from 'react'
import BasicStudentInfo from '../../StudentCV/BasicStudentInfo'
import EducationList from '../../WorkExperience/EducationList'
import WorkExperienceList from '../../WorkExperience/WorkExperienceList'

function MyProfile() {
  return (
    <div>
      <BasicStudentInfo/>
      <WorkExperienceList/>
      <EducationList/>
    </div>
  )
}

export default MyProfile
