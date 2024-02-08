import { FormEvent, useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";
import History from "../HistoryPage/History";
import { postData } from "../../services/Api";
import QuestionComponent from "../QuestionComponent";

const userId = "65c3c18e2fd9e9cf2177e773";

function SearchContainer () {
  const [inputQuestion, setInputQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputQuestion(event.target.value);
  }

  const handleSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await postData (userId, inputQuestion);
      setSubmittedQuestion(inputQuestion);
      setInputQuestion('');
      setSearchClicked(true);
    } catch (error) {
      console.error("Error submitting questions:", error);
    }
  }
  
  return (
    <div>
      <Search
      question={inputQuestion}
      onQuestionChange={handleQuestionChange}
      onSearchSubmit={handleSearchSubmit}
      />
      {searchClicked 
      && <SearchResult question={submittedQuestion} searchClicked={searchClicked}/>}
      <QuestionComponent/>
      
      
    </div>
  )
}

export default SearchContainer;