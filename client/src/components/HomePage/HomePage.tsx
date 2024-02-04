import Header from "./Header";
import Search from "./Search";
import SearchResult from "./SearchResult";
import SearchContainer from "./SearchContainer";
import { useState } from "react";
import UserComponent from "../UserComponent";
function HomePage() {
  
  return (
    <div>
      <Header />
      {/* <Search onSearch={handleSearch} />
      {showSearchResult && <SearchResult question={question} />} */}
      <SearchContainer />
      <UserComponent/>
    </div>
  );
}

export default HomePage;
