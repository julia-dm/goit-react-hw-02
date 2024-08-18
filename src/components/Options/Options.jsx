import PropTypes from 'prop-types';
import styles from '../Options/Options.module.css'

export default function Options({ type, onUpdate }) {
  return (
    <div className={styles.containerBtn} >
    <button onClick={onUpdate} className={styles.btn}  >
      {type}
    </button>
  </div>
    
  );
}

Options.propTypes = {
    type: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
