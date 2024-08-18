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

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const positivePercentage = totalFeedback > 0
    ? Math.round((values.good / totalFeedback) * 100)
    : 0;

  const handleReset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={styles.appContainer}>
      <Description />
      <Options type="Good" onUpdate={() => updateFeedback('good')} />
      <Options type="Neutral" onUpdate={() => updateFeedback('neutral')} />
      <Options type="Bad" onUpdate={() => updateFeedback('bad')} />
      {totalFeedback > 0 && (
        <Options type="Reset" onUpdate={handleReset} />
      )}
      {totalFeedback === 0 && (
        <Notification>No feedback yet</Notification>
      )}

      {totalFeedback > 0 && (
        <div>
          <Feedback type="Good: " value={values.good} />
          <Feedback type="Neutral: " value={values.neutral} />
          <Feedback type="Bad: " value={values.bad} />
          <Feedback type="Total: " value={totalFeedback} />
          <Feedback type="Positive: " value={positivePercentage} isPercentage={true} />
        </div>
      )}
    </div>
  );
}
