import propTypes from "prop-types";
import styles from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  percentPositive,
}) {
  return (
    <div className={styles.wrapperr}>
      <ul className={styles.feedback}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <ul className={styles.stats}>
        <li>Total: {total}</li>
        <li>Positive feedback: {percentPositive}%</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  percentPositive: propTypes.number,
};
