import { useEffect,useState } from "react";

interface SearchResultProps {
  question: string;
  chatGPTResponse: string;
  searchClicked: boolean;
  error: any;
}
function SearchResult ({question, chatGPTResponse}:SearchResultProps) {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  useEffect(()=> {
    const newRandomNumber = Math.floor(Math.random()*10)+1;
    setRandomNumber(newRandomNumber);
  }, [question]);
  return (
    <div className="">
      {randomNumber && (
        <>
        <img src={`src/assets/banner_images/${randomNumber}.jpeg`} alt={`Image ${randomNumber}`} />
        <h3>here's your question: {question}</h3>
        <h3>here's your answer: {chatGPTResponse}</h3>
        </>
      )}
      

    </div>
  )
}

export default SearchResult;
