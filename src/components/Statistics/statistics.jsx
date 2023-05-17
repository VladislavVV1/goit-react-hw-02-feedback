import React from "react";
export const Statistics = props => (
    <ul>
        <li>Good: {props.good}</li>
        <li>Neutral: {props.neutral}</li>
        <li>Bad: {props.bad}</li>
        <li>Total: {props.total}</li>
        <li>Positive feedback: {props.positivePercentage}%</li>
    </ul>
  );
  