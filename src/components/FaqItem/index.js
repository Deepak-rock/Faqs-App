// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isShowAnswer: false}

  toggleIcon = () => {
    const {isShowAnswer} = this.state
    this.setState({isShowAnswer: !isShowAnswer})
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isShowAnswer} = this.state
    const iconUrl = isShowAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const iconAlt = isShowAnswer ? 'minus' : 'plus'
    return (
      <li className="faqs-item">
        <div className="qus-ans-container">
          <h1 className="question">{questionText}</h1>
          <button className="button" type="button" onClick={this.toggleIcon}>
            <img src={iconUrl} alt={iconAlt} className="button-icon" />
          </button>
        </div>
        {isShowAnswer && (
          <>
            <hr />
            <p className="answer">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}
export default FaqItem
