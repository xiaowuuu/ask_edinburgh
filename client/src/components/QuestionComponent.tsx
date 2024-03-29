import React, { useEffect, useState } from "react";
import { getData } from "../services/Api";
interface Answer {
  answerId: string;
  answerText: string;
}

interface Question {
  userId: string;
  questionText: string;
  answers: Answer[];
}
const QuestionComponent: React.FC = () => {
  const [questionData, setQuestionData] = useState<Question[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setQuestionData(data || []);
      } catch (error) {
        console.error('error fetching data:', error);
      }
    }
    fetchData();
    }, [])
  
  return (
    <div>
      {questionData.length > 0 ? (
        <>
        {questionData.map((question, index)=> (
          <div key={index}>
            <h2 className="font-bold">Question: {question.questionText}</h2>
            {question.answers.length > 0 && (
              <ul>
              {question.answers.map((answer, answerIndex)=> (
                <li key={answerIndex}>
                  <p>Answer: {answer.answerText}</p>
                </li>
              ))}
            </ul>
            )}
          </div>
        ))}
        </>
      ):(
        <p>No search history yet.</p>
      )}
    </div>
  )
}

export default QuestionComponent;