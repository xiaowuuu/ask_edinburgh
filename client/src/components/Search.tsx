
  const Search: React.FC<{question: string; onQuestionChange:(newQuestion:string)=> void}> = ({
    question,
    onQuestionChange,
  }) => {
    const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onQuestionChange(event.target.value);
    }
    const handleSearchClick = () => {

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
    className="text-white bg-purple-700 border  rounded-full mr-4 px-3 py-2">Search With AI</button>
    </>
  )
}
export default Search;