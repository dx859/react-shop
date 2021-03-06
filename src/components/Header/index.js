import React from 'react'
import './style.css'

class Header extends React.Component {
  clickHandle() {
    const backRouter = this.props.backRouter
    if (backRouter) {
      this.props.history.push(backRouter)
    } else {
      window.history.back()
    }
  }
  render() {
    return (
      <div id="common-header">
        <span className="back-icon" onClick={this.clickHandle.bind(this)}>
          <i className="icon-chevron-left"></i>
        </span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header