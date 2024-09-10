import css from "./Feedback.module.css";

const Feedback = ({
  feedbackData: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <ul className={css.feedback}>
      <li>
        <p className={css.feedbackItemText}>Good: {good} </p>
      </li>
      <li>
        <p className={css.feedbackItemText}>Neutral: {neutral} </p>
      </li>
      <li>
        <p className={css.feedbackItemText}>Bad: {bad} </p>
      </li>
      <li>
        <p className={css.feedbackItemText}>Total: {totalFeedback} </p>
      </li>
      <li>
        <p className={css.feedbackItemText}>Positive: {positiveFeedback}% </p>
      </li>
    </ul>
  );
};

export default Feedback;
