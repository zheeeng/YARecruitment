import React from 'react'

import RecruitmentPosition from 'components/recruitment/RecruitmentPosition'

let RecruitmentDept = React.createClass({
  propTypes: {
    department: React.PropTypes.string,
    positions: React.PropTypes.array
  },
  getInitialState () {
    return {check: false, count: 0}
  },
  componentDidMount () {
    this.setState({count: this.props.positions.map(v => v.number).reduce((a, b) => +a + +b)})
  },
  handleDepartmentChange (e) {
    var newCheckState = !this.state.check
    this.setState({check: newCheckState})
  },
  render () {
    var departmentEntry = (
      <div className='recruitment-entry wings_box wings_box__right3r'>
        <label className='recruitment-entry_checkbar highlight wings_item wings_item__main'>
          <input type='checkbox' className='input-hide' checked={this.state.check} onChange={this.handleDepartmentChange} />
          <i className={'recruitment-entry_checkbox fa fa-' + (this.state.check ? 'check-' : '') + 'square-o'} />
          <span className='recruitment-entry_name highlight'>{this.props.department}</span>
          <i className='recruitment-entry_expand highlight fa fa-angle-down' />
        </label>
        <span className='recruitment-entry_count badage wings_item wings_item__right3r highlight'>{this.state.count}</span>
      </div>
    )

    var positions = this.props.positions.map(position => (
      <li key={position.id}>
        <RecruitmentPosition position={position.position} number={position.number} />
      </li>
    ))

    return (
      <div className='recruitment-dept'>
        {departmentEntry}
        <ul>
          {positions}
        </ul>
      </div>
    )
  }
})

export default RecruitmentDept
