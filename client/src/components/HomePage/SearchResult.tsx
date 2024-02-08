interface SearchResultProps {
  question: string;
  searchClicked: boolean;
}
function SearchResult ({question}:SearchResultProps) {
  return (
    <div className="">
      <h3>here's your question: {question}</h3>
    </div>
  )
}

export default SearchResult;
