import { ChangeEvent, FormEvent, useRef } from "react";

interface SearchProps {
  question:string;
  onQuestionChange: (event:ChangeEvent<HTMLInputElement>)=> void;
  onSearchSubmit:(event: FormEvent<HTMLFormElement>)=> void;
}
function Search ({ question, onQuestionChange, onSearchSubmit}:SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isQuestionEmpty = question.trim() === '';
  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>)=> {
    onSearchSubmit(event);
    if (inputRef.current){
      inputRef.current.value = "";
    }
  }
  return (
    <>
    <form onSubmit={handleSearchSubmit}>
    <input 
    type="text"
    value={question}
    onChange={onQuestionChange}
    className="w-2/5 border border-gray-500 rounded-full mr-4 px-3 py-2 focus:outline-none focus:border-blue-700"
    placeholder="Search your idea!"
    ></input>
    <button 
    disabled={isQuestionEmpty}
    type="submit" 
    className={`text-white bg-indigo-600 border-transparency rounded-full mr-4 px-3 py-2 ${isQuestionEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}>Search With AI</button>
    {/* button is disabled when question is empty */}
    </form>
    <div className="pt-5 pb-5">
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
