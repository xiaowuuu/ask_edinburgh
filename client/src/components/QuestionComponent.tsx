import React, { useState, useEffect } from "react";
import { fetchUserData, UserData } from "../services/Api";

type QuestionComponentProps = {
  question: {
    _id: string;
    questionText: string;
    answers: {
      _id: string;
      answerText: string;
    }[];
  };
};

const QuestionComponent: React.FC<QuestionComponentProps> = ({ question }) => {
  return (
    <div>
      <h3>{question.questionText}</h3>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer._id}>{answer.answerText}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;