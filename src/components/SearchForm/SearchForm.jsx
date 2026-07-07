import "./SearchForm.css";

function SearchForm({ searchQuery, onSearchChange, onSearchSubmit }) {
  return (
    <form className="search-form" onSubmit={onSearchSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={onSearchChange}
      />

      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
