import React, { useContext, createContext, useState } from 'react';
const FeedbacksContext = createContext();

export function FeedbacksProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleFeedback = event => {
    if (event.target.textContent === 'good') {
      setFeedbacks(prev => ({ ...prev, good: prev.good + 1 }));
    }
    if (event.target.textContent === 'neutral') {
      setFeedbacks(prev => ({ ...prev, neutral: prev.neutral + 1 }));
    }
    if (event.target.textContent === 'bad') {
      setFeedbacks(prev => ({ ...prev, bad: prev.bad + 1 }));
    }
  };
  const countTotalFeedback = () => {
    return feedbacks.good + feedbacks.neutral + feedbacks.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return ((feedbacks.good / countTotalFeedback()) * 100).toFixed(2);
  };
  const contextValue = {
    feedbacks,
    handleFeedback,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  };
  return (
    <FeedbacksContext.Provider value={contextValue}>
      {children}
    </FeedbacksContext.Provider>
  );
}
export function useFeedbacks() {
  return useContext(FeedbacksContext);
}
