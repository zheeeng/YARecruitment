import React from 'react'

let RecruitmentList = React.createClass({
  render () {
    return (
      <div className='recruitment_content'>
        <div className='recruitment_deptList'>
          <span>工程研发部</span><em>120</em>
          <ul>
            <li>
              <span>Mac 开发工程师</span><em>9</em>
            </li>
            <li>
              <span>Mac 开发工程师</span><em>9</em>
            </li>
          </ul>
        </div>
        <div className='recruitment_deptList'>
          <span>工程研发部</span><em>120</em>
          <ul>
            <li>
              <span>Mac 开发工程师</span><em>9</em>
            </li>
            <li>
              <span>Mac 开发工程师</span><em>9</em>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

export default RecruitmentList
