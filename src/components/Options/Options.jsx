import PropTypes from 'prop-types';
import styles from '../Options/Options.module.css'

export default function Options({ onFeedbackClick, resetBtn, resetFeedback }) {
  return (
    <ul className={styles.buttonList}>
      <li>
        <button onClick={() => onFeedbackClick("good")}>
          Good
        </button>
      </li>
      <li>
        <button onClick={() => onFeedbackClick("neutral")}>
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => onFeedbackClick("bad")}>
          Bad
        </button>
      </li>
      {resetFeedback && (
        <li>
          <button onClick={resetBtn}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

Options.propTypes = {
  resetBtn: PropTypes.func,
  resetFeedback: PropTypes.bool,
  onFeedbackClick: PropTypes.func,
};
