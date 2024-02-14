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
    <div className="border-2 border-gray-400 border-opacity-25 rounded-lg rounded-[10px] h-80 w-96">
      {randomNumber && (
        <>
        <img 
        className="object-cover h-48 w-full rounded-t-lg"
        src={`src/assets/banner_images/${randomNumber}.jpeg`} 
        alt={`Image ${randomNumber}`} />
        <div className="p-4 ">
        <p className="text-base">{question}</p>
        <p className="text-base">here's your answer: {chatGPTResponse}{chatGPTResponse}{chatGPTResponse}{chatGPTResponse}{chatGPTResponse}{chatGPTResponse}{chatGPTResponse}{chatGPTResponse}{chatGPTResponse}{chatGPTResponse}</p>
        </div>
        </>
      )}
      

    </div>
  )
}

export default SearchResult;
