// import { useLocation} from 'react-router-dom';
// import { useState } from 'react';
import QuestionComponent from "../QuestionComponent";

interface HistoryProps {
  searchHistory?: string[];
}
const History:React.FC<HistoryProps> = ({searchHistory = []})=> {
  return (
    <div>
      <h3 className='text-6xl font-ABeeZee'>Your search history</h3>
      {searchHistory.length>0?(
        <ul>{searchHistory.map((item,index)=> (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
          </ul>
      ):(
        <p>No search history yet.</p>
      )}
      <QuestionComponent/>
      
    </div>
  )
}

export default History