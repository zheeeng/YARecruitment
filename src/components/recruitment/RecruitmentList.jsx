import React from 'react'

import RecruitmentDept from 'components/recruitment/RecruitmentDept'

let RecruitmentList = React.createClass({
  render () {
    return (
      <div className='recruitment-list'>
        <ul>
          <li>
            <RecruitmentDept />
          </li>
        </ul>
      </div>
    )
  }
})

export default RecruitmentList
