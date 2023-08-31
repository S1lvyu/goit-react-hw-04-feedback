import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { useFeedbacks } from 'store/FeedbacksContext';

export const App = () => {
  const { feedbacks } = useFeedbacks();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics">
        {!feedbacks.good && !feedbacks.neutral && !feedbacks.bad ? (
          <Notification message="There is no Feedback" />
        ) : (
          <Statistics />
        )}
      </Section>
    </div>
  );
};
