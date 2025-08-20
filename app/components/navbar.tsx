const Navbar = () => {
  return (
    <div id="navbar">
      <div>Logo</div>
      <div id="filter-group">
        <button>All</button>
        <button>Completed</button>
        <button>Pending</button>
      </div>
      <div>
        <input type="text" placeholder="search todo" />
      </div>
    </div>
  );
};

export default Navbar;
