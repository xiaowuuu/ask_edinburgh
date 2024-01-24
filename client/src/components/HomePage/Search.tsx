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

  const StyledSpan = ({text, bgColor}) => (
    <span className={`text-white  bg-${bgColor} border rounded-full mr-4 px-3 py-2`}>
      {text}
    </span>
  )

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
    className="text-white bg-purple-700 border  rounded-full mr-4 px-3 py-2">Search With AI</button>
    <div>
    <StyledSpan text='HISTORY' bgColor="purple-700" />
    <StyledSpan text='EDINBURGH FESTIVAL FRINGE' bgColor="purple-700"/>
    <StyledSpan text='SUNSHINE ON LEITH' bgColor="purple-700"/>
    <StyledSpan text='LITERARY HERITAGE' bgColor="yellow-500"/>
    <StyledSpan text='EDINBURG’S HOGMANAY' bgColor="yellow-300"/>
    </div>
    

    </>
  )
}
export default Search;