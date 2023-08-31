import React from 'react';
import styles from './FeedbackOptions.module.css';

import { useFeedbacks } from 'store/FeedbacksContext';
export default function FeedbackOptions() {
  const { feedbacks, handleFeedback } = useFeedbacks();

  const options = Object.keys(feedbacks);
  return (
    <ul onClick={handleFeedback} className={styles.list}>
      {options.map((el, index) => {
        return (
          <li key={index} className={styles.list__element}>
            <button type="button" className={styles.button}>
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
