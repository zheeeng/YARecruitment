import React from 'react'

import RecruitmentPosition from 'components/recruitment/RecruitmentPosition'

let RecruitmentDept = React.createClass({
  propTypes: {
    department: React.PropTypes.string,
    positions: React.PropTypes.array
  },
  getInitialState () {
    return {checked: false, count: 0, checedkPositions: []}
  },
  componentDidMount () {
    this.setState({
      count: this.props.positions.map(v => v.number).reduce((a, b) => +a + +b),
      checedkPositions: this.props.positions.map(v => false)
    })
  },
  handleDepartmentChange (e) {
    var newCheckedState = !this.state.checked
    if (newCheckedState) {
      this.setState({
        checked: newCheckedState,
        checedkPositions: this.state.checedkPositions.map(v => true)
      })
    } else {
      this.setState({
        checked: newCheckedState,
        checedkPositions: this.state.checedkPositions.map(v => false)
      })
    }
  },
  positionChange (index, bool) {
    var checedkPositions = this.state.checedkPositions.slice()
    checedkPositions[index] = bool
    if (!~checedkPositions.indexOf(false) && !this.state.checked) {
      this.setState({checked: true, checedkPositions})
    } else if (!~checedkPositions.indexOf(true) && this.state.checked) {
      this.setState({checked: false, checedkPositions})
    } else {
      this.setState({checedkPositions})
    }
  },
  clearAllPositions () {
    this.setState({
      checked: false,
      checedkPositions: this.state.checedkPositions.map(v => false)
    })
  },
  render () {
    var departmentEntry = (
      <div className='recruitment-entry wings_box wings_box__right3r'>
        <label className='recruitment-entry_checkbar highlight wings_item wings_item__main'>
          <input type='checkbox' className='input-hide' checked={this.state.checked} onChange={this.handleDepartmentChange} />
          <i className={'recruitment-entry_checkbox fa fa-' + (this.state.checked ? 'check-' : '') + 'square-o'} />
          <span className='recruitment-entry_name highlight'>{this.props.department}</span>
          <i className='recruitment-entry_expand highlight fa fa-angle-down' />
        </label>
        <span className='recruitment-entry_count badage wings_item wings_item__right3r highlight'>{this.state.count}</span>
      </div>
    )

    var positions = this.props.positions.map((position, index) => (
      <li key={position.id}>
        <RecruitmentPosition position={position.position} number={position.number} index={index} checked={this.state.checedkPositions[index] || false} onPositionChange={this.positionChange} />
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
