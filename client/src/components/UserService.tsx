import React, { useEffect, useState } from "react";

const baseUrl = 'http://localhost:9000/'

type UserData = {
  user: {
    _id: string;
    username: string;
  };
  questions: {
    question: {
      _id: string;
      questionText: string;
    };
    answers: {
      _id: string;
      answerText: string;
    }[];
  }[];
}[];

const UserService: React.FC = () => {
  const [data, setData] = useState<UserData>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('error fetching data:', error);
      }
    }
    fetchData();
    }, [])
  
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.user._id}>
            User: {item.user.username}
            <ul>
              {item.questions.map((question) => (
                <li key={question.question._id}>
                  Question: {question.question.questionText}
                  <ul>
                    {question.answers.map((answer) => (
                      <li key={answer._id}>
                        Answer: {answer.answerText}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserService;