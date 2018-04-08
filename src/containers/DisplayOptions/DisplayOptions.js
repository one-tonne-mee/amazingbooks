import React from 'react'
import './DisplayOptions.css'

class DisplayOptions extends React.Component {
  render() {
    return (
      <div className="Display-Options">
        <input type="text" className="PushLeft"/>
        <div className="PushRight"> &nbsp; </div>
        <div className="Options-Icons-Container">
          <span> square</span> <span> hambu </span>
        </div>
      </div>
    )
  }
}

export default DisplayOptions
