// import { useLocation} from 'react-router-dom';
// import { useState } from 'react';
interface HistoryProps {
  searchHistory?: string[];
}
function History({searchHistory=[]}:HistoryProps) {
  return (
    <div>
      <h3 className='text-6xl font-ABeeZee'>Your search history</h3>
      {searchHistory.length>0?(
        <ul>{searchHistory.map((item, index)=> (
          <li key={index}>{item}</li>
        ))}
          </ul>
      ):(
        <p>No search history yet.</p>
      )}
      
    </div>
  )
}

export default History