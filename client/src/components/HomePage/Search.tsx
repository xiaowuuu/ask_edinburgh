import { useState } from "react";
function Search ({onSearch}) {
  const [question, setQuestion] = useState('');
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  }
  const [searchClicked, setSearchClicked] = useState<boolean>(false);
  const handleSearchClick = () => {
    setSearchClicked(true);
    onSearch(question);
  }


  return (
    <>
    <input 
    type="text"
    className="w-2/5 border border-gray-500 rounded-full mr-4 px-3 py-2 focus:outline-none focus:border-blue-700"
    placeholder="Search your idea!"
    onChange={handleQuestionChange}
    ></input>
    <button 
    onClick={handleSearchClick}
    type="button" 
    className="text-white bg-indigo-600 border-transparency  rounded-full mr-4 px-3 py-2">Search With AI</button>
    <div>
    <span className="text-white  bg-indigo-500 border-transparency rounded-full mr-4 px-3 py-2">
HISTORY
    </span>
    <span className="text-white  bg-amber-300 border-transparency rounded-full mr-4 px-3 py-2">
    EDINBURGH FESTIVAL FRINGE
    </span>
    <span className="text-white  bg-violet-400 border-transparency rounded-full mr-4 px-3 py-2">
    SUNSHINE ON LEITH
    </span>
    <span className="text-white  bg-violet-400 border-transparency rounded-full mr-4 px-3 py-2">
    LITERARY HERITAGE
    </span>
    <span className="text-white  bg-amber-300 border-transparency rounded-full mr-4 px-3 py-2">
    EDINBURG’S HOGMANAY
    </span>
    </div>
    

    </>
  )
}
export default Search;