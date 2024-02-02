// import { useLocation} from 'react-router-dom';
// import { useState } from 'react';
import QuestionComponent from "../QuestionComponent";

interface HistoryProps {
  searchHistory?: string[];
}
function History({searchHistory=[]}:HistoryProps) {
  return (
    <div>
      <h3 className='text-6xl font-ABeeZee'>Your search history</h3>
      {searchHistory.length>0?(
        <ul>{searchHistory.map((item, index)=> (
          <li key={index}>
            <QuestionComponent question={{_id: index.toString(), questionText: item, answers:[]}}/>
          </li>
        ))}
          </ul>
      ):(
        <p>No search history yet.</p>
      )}
      
    </div>
  )
}

export default History