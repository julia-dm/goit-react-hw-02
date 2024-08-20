import PropTypes from 'prop-types';

export default function Feedback({ feedbackPositive, feedbackTotal, feedbackVal }) {
  const { good, neutral, bad } = feedbackVal;
  return (
    <div>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <div>
        <p>Total: {feedbackTotal}</p>
        <p>Positive: {feedbackPositive}%</p>
      </div>
    </div>
  );
}

Feedback.propTypes = {
  feedbackPositive: PropTypes.number,
  feedbackTotal: PropTypes.number,
  feedbackVal: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};