import React from 'react'

import RecruitmentList from 'components/recruitment/RecruitmentList'

let Recruitment = React.createClass({
  render () {
    return (
      <div className='recruitment_box'>
        <header className='recruitment_header wings_box wings_box__right3r'>
          <div className='recruitment_title wings_item wings_item__main'>
            <span>招聘职位</span>
          </div>
          <a className='recruitment_clean-btn wings_item wings_item__right3r highlight'>清空</a>
        </header>
        <RecruitmentList />
      </div>
    )
  }
})

export default Recruitment
