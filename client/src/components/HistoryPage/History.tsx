// import { useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuestionComponent from "../QuestionComponent";


function History() {
  return (
    <div>
      <h2>Your Search History</h2>
      <QuestionComponent/>
    </div>
  )
}

export default History