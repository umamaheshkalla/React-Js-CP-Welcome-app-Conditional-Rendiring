import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  clicked = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  textChange = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.textChange()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button onClick={this.clicked} type="button" className="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
