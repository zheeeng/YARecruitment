import React from 'react'

import RecruitmentList from 'components/recruitment/RecruitmentList'

let Recruitment = React.createClass({
  render () {
    return (
      <div className='recruitment_box'>
        <header className='recruitment_header'>
          <div>
            <span>招聘职位</span>
          </div>
          <a>清空</a>
        </header>
        <RecruitmentList />
      </div>
    )
  }
})

export default Recruitment
