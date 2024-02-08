import { FormEvent, useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";
import History from "../HistoryPage/History";
import { postData } from "../../services/Api";
import QuestionComponent from "../QuestionComponent";
function SearchContainer () {
  const [question, setQuestion] = useState('');
  // const [searchClicked, setSearchClicked] = useState<boolean>(false);
  // const [searchHistory, setSearchHistory] = useState<string[]>([]);
  
  // const location = useLocation();
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  }
  // const handleSearchClick = () => {
  //   setSearchClicked(true);
  //   // fetchImage(question);
  //   if (question.trim()!== ''){
  //     setSearchHistory((prevHistory)=> [...prevHistory,question]);
  //   }
  // }
  const handleSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await postData("/questions", {question});
      setQuestion("");
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