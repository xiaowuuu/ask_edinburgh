interface SearchResultProps {
  question: string;
  searchClicked: boolean;
}
function SearchResult ({question, searchClicked}:SearchResultProps) {
  return (
    <div className="">
      <h3>YOur question: {question}</h3>
    </div>
  )
}

export default SearchResult;
