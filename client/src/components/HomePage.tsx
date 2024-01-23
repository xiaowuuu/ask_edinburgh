import Header from "./Header"
import Logo from "./Logo";
import Search from "./Search";
import SearchResult from "./SearchResult";
import { useState } from "react";
function HomePage() {
  return (
    <div>
    <Logo/>
    <Header/>

    <Search/>
    <SearchResult/>
    </div>
    
  )
}

export default HomePage;