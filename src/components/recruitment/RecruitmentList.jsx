import React from 'react'

import data from 'src/data.json'

import RecruitmentDept from 'components/recruitment/RecruitmentDept'

let RecruitmentList = React.createClass({
  render () {
    var recruitmentDepartments = data.map(department => {
      return (
        <li key={department.id}>
          <RecruitmentDept department={department.department} positions={department.positions} />
        </li>
      )
    })
    return (
      <div className='recruitment-list'>
        <ul>
          {recruitmentDepartments}
        </ul>
      </div>
    )
  }
})

export default RecruitmentList
