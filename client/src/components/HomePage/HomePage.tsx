import Header from "../Header";
import Logo from "../Logo";
import Search from "./Search";
import SearchResult from "./SearchResult";
import { useState } from "react";
function HomePage() {
  const [question, setQuestion] = useState<string>("");
  const [showSearchResult, setShowSearchResult] = useState<boolean>(false);
  const handleSearch = (newQuestion: string) => {
    setQuestion(newQuestion);
    setShowSearchResult(true);
  };
  return (
    <div>
      <Logo />
      <Header />
      <Search onSearch={handleSearch} />
      {showSearchResult && <SearchResult question={question} />}
    </div>
  );
}

export default HomePage;
