import React from 'react'

import RecruitmentPosition from 'components/recruitment/RecruitmentPosition'

let RecruitmentDept = React.createClass({
  render () {
    return (
      <div className='recruitment-dept'>
        <div className='recruitment-entry wings_box wings_box__right3r'>
          <label className='recruitment-entry_checkbar highlight wings_item wings_item__main'>
            <input type='checkbox' className='input-hide' />
            <i className='recruitment-entry_checkbox fa fa-square-o' />
            <span className='recruitment-entry_name highlight'>工程研发部</span>
            <i className='recruitment-entry_expand highlight fa fa-angle-down' />
          </label>
          <span className='recruitment-entry_count badage wings_item wings_item__right3r highlight'>120</span>
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
