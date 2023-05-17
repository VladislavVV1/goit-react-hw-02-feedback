import { Component } from "react";
import { Statistics } from "./Statistics/statistics";
import { FeedbackOptions } from "./FeedbackOptions/feedbackOptions";
import { Section } from "./Section/section";
export class App extends Component{
  state = {
    options: 
    {good: 0,
    neutral: 0,
    bad: 0}
  }

  handleFeedbackButtonClick = ({target}) => {
    this.setState(prevState => ({
      options: {...prevState.options, [target.name]: prevState.options[target.name] + 1,}
    }))
  }

  countTotalFeedback = () => {
    const {good, bad, neutral} = this.state.options
    return good + bad + neutral;
  }
  countPositiveFeedbackPercentage = () => {
    if(this.countTotalFeedback()){
      return (this.state.options.good/this.countTotalFeedback()*100).toFixed()
    }
    return 0
  }

  render() {
    return <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={this.state.options} onLeaveFeedback={this.handleFeedbackButtonClick}></FeedbackOptions>
      </Section>
      
      <Section title={'Statistics'}>
        <Statistics good={this.state.options.good} neutral={this.state.options.neutral} bad={this.state.options.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
      </Section>
    </div>  
  }
}


