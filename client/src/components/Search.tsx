import React, { useState } from "react";
function Search () {

  return (
    <>
    <input 
    type="text"
    className="w-2/5 border border-gray-500 rounded-full mr-4 px-3 py-2 focus:outline-none focus:border-blue-700"
    placeholder="Search your idea!"
    ></input>
    <button type="button" className="text-white bg-purple-700 border  rounded-full mr-4 px-3 py-2">Search With AI</button>
    </>
  )
}
export default Search;