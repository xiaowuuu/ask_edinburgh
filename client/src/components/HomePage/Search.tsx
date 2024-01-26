import { useEffect, useState } from "react";

function Search ({onSearch}) {
  const [question, setQuestion] = useState('');
  const [img, setImg] = useState(null);
  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  }
  // set up fetch image
  const fetchImage = async (q) => {
    try {
      const apiKey = "AIzaSyDQfrrnPJdHyJQrClVJ9qBjSErqbwF4PDI";
      const cx = "a1f03943e0a6a4df0"
      // const searchType = "image";
      const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?q=test&key=${apiKey}&cx=${cx}:omuauf_lfve&searchType=image&q=${q}`
      );
      const data = await res.json();
      console.log('api response:', data);
      const imageUrl = data?.items?.[0]?.link;
      if (imageUrl) {
        setImg(imageUrl);
      } else {
        console.error('No image found');
      }
    } catch (error) {
      console.error("error fetching image", error);
    }
  }

  const [searchClicked, setSearchClicked] = useState<boolean>(false);
  const handleSearchClick = () => {
    setSearchClicked(true);
    onSearch(question);
    fetchImage(question);
  }
  useEffect(()=> {

  }, [img]);


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
    {img && (
      <div>
        <img src={img} alt="fetched image"/>
      </div>
    )}
    </>
  )
}
export default Search;