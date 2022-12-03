const Header = ({ setDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="toggle"
        onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
