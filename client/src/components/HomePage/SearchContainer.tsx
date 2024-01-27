import { useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";
import History from "../HistoryPage/History";


function SearchContainer () {
  const [question, setQuestion] = useState('');
  const [searchClicked, setSearchClicked] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  
  // const location = useLocation();
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  }
  const handleSearchClick = () => {
    setSearchClicked(true);
    // fetchImage(question);
    if (question.trim()!== ''){
      setSearchHistory((prevHistory)=> [...prevHistory,question]);
    }
  }
  return (
    <div>
      <Search
      question={question}
      onQuestionChange={handleQuestionChange}
      onSearchClick={handleSearchClick}
      />
      {searchClicked 
      && <SearchResult question={question} searchClicked={searchClicked}/>}
      <History searchHistory={searchHistory}/>

      
      
    </div>
  )
}

export default SearchContainer;