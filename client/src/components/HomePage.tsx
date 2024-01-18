import Header from "./Header"
import Logo from "./Logo";
import Search from "./Search";
import SearchResult from "./SearchResult";
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