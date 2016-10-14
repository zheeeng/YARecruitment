import React from 'react'

import data from 'src/data.json'

import RecruitmentDept from 'components/recruitment/RecruitmentDept'

class RecruitmentList extends React.Component {
  constructor (props) {
    super(props)
    this.clearCheckbox = this.clearCheckbox.bind(this)
  }

  // <!-- custom methods
  clearCheckbox () {
    if (Array.isArray(this._recruitment_depart)) {
      this._recruitment_depart.forEach(depart => {
        depart.clearAllPositions()
      })
    }
  }
  // custom methods -->

  render () {
    var recruitmentDepartments = data.map((department, index) => {
      return (
        <li key={department.id}>
          <RecruitmentDept ref={(child) => {
            if (Array.isArray(this._recruitment_depart)) {
              this._recruitment_depart[index] = child
            } else {
              this._recruitment_depart = []
              this._recruitment_depart[index] = child
            }
          }} department={department.department} positions={department.positions} />
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
}

export default RecruitmentList
