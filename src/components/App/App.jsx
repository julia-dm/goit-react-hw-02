
import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import styles from '../App/App.module.css';

export default function App() {
  const getInitialValues = () => {
    const savedValues = window.localStorage.getItem('feedback-values');
    return savedValues ? JSON.parse(savedValues) : { good: 0, neutral: 0, bad: 0 };
  };

  const [values, setValues] = useState(getInitialValues);

  useEffect(() => {
    window.localStorage.setItem('feedback-values', JSON.stringify(values));
  }, [values]);

  const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const positivePercentage = totalFeedback > 0
    ? Math.round((values.good / totalFeedback) * 100)
    : 0;

  const resetBtn = () => setValues({good:0,neutral:0,bad:0});

  return (
    <div className={styles.appContainer}>
      <Description />
      <Options
        onFeedbackClick={(feedbackType) => updateFeedback(feedbackType)}
        resetBtn={resetBtn}
        resetFeedback={totalFeedback > 0}
      />

      {totalFeedback ===0  && <Notification>No feedback yet</Notification>}

      {totalFeedback > 0 && (
        <div>
          <Feedback
            feedbackVal={values}
            feedbackTotal={totalFeedback}
            feedbackPositive={positivePercentage}
          />
        </div>
      )}
    </div>
  );
}




