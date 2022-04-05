import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInput = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onBlurInput = () => {
    this.setState({count: 0})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <img
          className="image"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
        <div className="bottom-container">
          <h1>Calculate the Letters you enter</h1>
          <div className="input-con">
            <label htmlFor="input">Enter the phrase</label>
            <input
              onChange={this.onChangeInput}
              id="input"
              className="input"
              placeholder="Enter the phrase"
              onBlur={this.onBlurInput}
            />
          </div>
          <p type="button" className="letters">
            No.of letters: {count}
          </p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
