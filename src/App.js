import React from 'react';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>

        <Section title="Statistic" />
      </>
    );
  }
}

export default App;
