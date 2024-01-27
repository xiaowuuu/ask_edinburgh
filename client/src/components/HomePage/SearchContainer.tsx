import { useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";

function SearchContainer () {
  const [question, setQuestion] = useState('');
  const [searchClicked, setSearchClicked] = useState<boolean>(false);
  
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  }
  const handleSearchClick = () => {
    setSearchClicked(true);
    // fetchImage(question);
  }
  return (
    <div>
      <Search
      question={question}
      onQuestionChange={handleQuestionChange}
      onSearchClick={handleSearchClick}
      />
      <SearchResult question={question} searchClicked={searchClicked}/>
    </div>
  )
}

export default SearchContainer;