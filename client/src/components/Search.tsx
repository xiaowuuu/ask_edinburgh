import SearchButton from "./SearchButton";
function Search () {
  return (
    <>
    <input 
    type="text"
    className="w-2/5 border border-black rounded-md mr-4 px-3 py-2 focus:outline-none focus:border-blue-700"
    placeholder="Search your idea!"
    ></input>
    <SearchButton/>
    </>
  )
}
export default Search;