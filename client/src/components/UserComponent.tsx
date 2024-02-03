import React, { useEffect, useState } from "react";
import { fetchUserData, UserData } from "../services/Api";
// import QuestionComponent from "./QuestionComponent";


const UserComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData();
        setUserData((prevUserData) => [...prevUserData, data]);
      } catch (error) {
        console.error('error fetching data:', error);
      }
    }
    fetchData();
    }, [])
  
  return (
    <div>
      <ul>
        {userData.map((user) => (
          <li key={user.user._id}>
            User: {user.user.username}
            <ul>
              {user.questions.map((question)=> (
                <li key={question.question._id}>
                  {question.question.questionText}
                  <ul>
                    {question.answers.map((answer)=> (
                      <li key={answer._id}>{answer.answerText}</li>
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

export default UserComponent;