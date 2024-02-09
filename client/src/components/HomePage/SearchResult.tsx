interface SearchResultProps {
  question: string;
  chatGPTResponse: string;
  searchClicked: boolean;
  error: any;
}
function SearchResult ({question, chatGPTResponse}:SearchResultProps) {
  return (
    <div className="">
      <h3>here's your question: {question}</h3>
      <h3>here's your answer: {chatGPTResponse}</h3>

    </div>
  )
}

export default SearchResult;
