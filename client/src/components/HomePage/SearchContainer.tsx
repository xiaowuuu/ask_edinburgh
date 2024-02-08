import { FormEvent, useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";
import History from "../HistoryPage/History";
import { postData } from "../../services/Api";
import QuestionComponent from "../QuestionComponent";

const userId = "65c3c18e2fd9e9cf2177e773";

function SearchContainer () {
  const [question, setQuestion] = useState('');
  
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  }

  const handleSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await postData (userId, question);
      setQuestion('');
    } catch (error) {
      console.error("Error submitting questions:", error);
    }
  }
  
  return (
    <div>
      <Search
      question={question}
      onQuestionChange={handleQuestionChange}
      onSearchSubmit={handleSearchSubmit}
      />
      {/* {searchClicked 
      && <SearchResult question={question} searchClicked={searchClicked}/>}
      <History searchHistory={searchHistory}/> */}
      <QuestionComponent/>
      
      
    </div>
  )
}

export default SearchContainer;