import { MdSearch } from "react-icons/md";
const Search = ({ setSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        onChange={(e) => setSearchNote(e.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
