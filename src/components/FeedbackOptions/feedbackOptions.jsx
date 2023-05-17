import React from "react";
export const FeedbackOptions = ({options, onLeaveFeedback, }) => (
    <>
        {Object.keys(options).map(key => (
            <button key={key} name={key} type="button" onClick={onLeaveFeedback}>{key[0].toUpperCase() + key.slice(1)}</button>
        ))}
    </>
  );
  