import propTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <button
          type="button"
          className={styles.button}
          name={option}
          key={option}
          onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.array,
  onLeaveFeedback: propTypes.func,
};
