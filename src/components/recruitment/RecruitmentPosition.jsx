import React from 'react'

let RecruitmentPosition = React.createClass({
  render () {
    return (
      <div className='recruitment-position'>
        <div className='recruitment-entry wings_box wings_box__right3r'>
          <label className='recruitment-entry_checkbar highlight wings_item wings_item__main'>
            <input type='checkbox' className='input-hide' />
            <i className='recruitment-entry_checkbox fa fa-square-o' />
            <span className='recruitment-entry_name'>Mac 开发工程师</span>
          </label>
          <span className='recruitment-entry_count wings_item wings_item__right3r highlight'>9</span>
        </div>
      </div>
    )
  }
})

export default RecruitmentPosition
