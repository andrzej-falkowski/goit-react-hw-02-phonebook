import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import styles from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    event.preventDefault();
    const name = event.target.name;
    this.setState((state) => ({ [name]: state[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    console.log(`Total:${this.countTotalFeedback()}`)
    console.log(`Good:${this.state.good}`)
    return (Math.round(this.state.good / this.countTotalFeedback() * 100));
    
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback!">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={["good", "neutral", "bad"]}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback()}
              percentPositive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
