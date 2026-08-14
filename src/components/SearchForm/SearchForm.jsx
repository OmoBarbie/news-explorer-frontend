import "./SearchForm.css";

function SearchForm({ searchQuery, onSearchChange, onSearchSubmit }) {
  //   const [searchQuery, setSearchQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchQuery);
  }

  return (
    <div className="search">
      <div className="search__container">
        <h2 className="search__title">What's going on in the world?</h2>
        <p className="search__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <form className="search__form" onSubmit={onSearchSubmit}>
        <input
          onChange={(e) => onSearchChange(e.target.value)}
          type="text"
          placeholder="nature"
          className="search__input"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
