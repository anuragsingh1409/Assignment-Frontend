function SearchBar({ setSearchQuery }) {
    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
  
    return (
      <input
        type="text"
        placeholder="Search for a project"
        onChange={handleSearch}
      />
    );
  }

  export default SearchBar;