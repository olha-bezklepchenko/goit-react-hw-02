import "./App.css";
import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbackData, setFeedbackData] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("savedFeedbackData")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  const updateFeedback = (feddbackType) =>
    setFeedbackData((prev) => ({
      ...prev,
      [feddbackType]: prev[feddbackType] + 1,
    }));

  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;

  const positiveFeedback = Math.round(
    ((feedbackData.good + feedbackData.neutral) / totalFeedback) * 100
  );

  const resetFeedback = () =>
    setFeedbackData({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  useEffect(() => {
    window.localStorage.setItem(
      "savedFeedbackData",
      JSON.stringify(feedbackData)
    );
  }, [feedbackData]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackData={feedbackData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
