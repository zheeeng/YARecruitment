import React from 'react'

import Recruitment from 'components/recruitment/Recruitment'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className='app_leftsider'>
          <Recruitment />
        </div>
        <div className='app_rightsider' />
      </div>
    )
  }
}

export default App
