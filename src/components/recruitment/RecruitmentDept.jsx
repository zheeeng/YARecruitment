import React from 'react'

import RecruitmentPosition from 'components/recruitment/RecruitmentPosition'

let RecruitmentDept = React.createClass({
  render () {
    return (
      <div className='recruitment-dept'>
        <div className='recruitment-dept_entry wings_box wings_box__right3r'>
          <label className='recruitment-dept_entry-check highlight wings_item wings_item__main'>
            <input type='checkbox' className='input-hide' />
            <i className='fa fa-square-o' />
            <span className='recruitment-dept_entry-name highlight'>工程研发部</span>
            <i className='recruitment-dept_entry-expand highlight fa fa-angle-down' />
          </label>
          <span className='recruitment-dept_entry-count wings_item wings_item__right3r highlight'>120</span>
        </div>
        <ul>
          <li>
            <RecruitmentPosition />
          </li>
        </ul>
      </div>
    )
  }
})

export default RecruitmentDept
