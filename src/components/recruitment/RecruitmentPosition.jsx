import React from 'react'

let RecruitmentPosition = React.createClass({
  propTypes: {
    position: React.PropTypes.string,
    number: React.PropTypes.number,
    index: React.PropTypes.number,
    checked: React.PropTypes.bool,
    positionChange: React.PropTypes.func
  },
  handlePositionChange (e) {
    this.props.positionChange(this.props.index, !this.props.checked)
  },
  render () {
    var positionEntry = (
      <div className='recruitment-entry wings_box wings_box__right3r'>
        <label className='recruitment-entry_checkbar highlight wings_item wings_item__main'>
          <input type='checkbox' className='input-hide' checked={this.props.checked} onChange={this.handlePositionChange} />
          <i className={'recruitment-entry_checkbox fa fa-' + (this.props.checked ? 'check-' : '') + 'square-o'} />
          <span className='recruitment-entry_name'>{this.props.position}</span>
        </label>
        <span className='recruitment-entry_count wings_item wings_item__right3r highlight'>{this.props.number}</span>
      </div>
    )
    return (
      <div className='recruitment-position'>
        {positionEntry}
      </div>
    )
  }
})

export default RecruitmentPosition
