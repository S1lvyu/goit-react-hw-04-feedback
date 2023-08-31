import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import { useFeedbacks } from 'store/FeedbacksContext';
export default function Statistics() {
  const { feedbacks, countTotalFeedback, countPositiveFeedbackPercentage } =
    useFeedbacks();

  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          Good: <span className={styles.result}>{feedbacks.good}</span>
        </li>
        <li className={styles.list__item}>
          Neutral: <span className={styles.result}>{feedbacks.neutral}</span>
        </li>
        <li className={styles.list__item}>
          Bad: <span className={styles.result}>{feedbacks.bad}</span>
        </li>
      </ul>
      <p className={styles.text}>
        Total: <span className={styles.result}>{countTotalFeedback()}</span>
      </p>
      <p className={styles.text}>
        Positive feedbacks:{' '}
        <span className={styles.result}>
          {countPositiveFeedbackPercentage()}%
        </span>
      </p>
    </div>
  );
}
Statistics.propTypes = {
  feedbacks: PropTypes.object,
  total: PropTypes.number,
  positiveFeedbacks: PropTypes.string,
};
