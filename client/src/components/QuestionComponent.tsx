import React, { useEffect, useState } from "react";
import { getData } from "../services/Api";

const QuestionComponent: React.FC = () => {
  const [questionData, setQuestionData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        console.log('fetch data', data)
        setQuestionData(data);
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
            <h2>Question: {question.questionText}</h2>
          </div>
        ))}
        </>
      ):(
        <p>Loading...</p>
      )}
    </div>
  )
}

export default QuestionComponent;