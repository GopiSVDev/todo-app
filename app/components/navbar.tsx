import { useNavigate } from "react-router";

const Navbar = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (query: string) => void;
}) => {
  const navigate = useNavigate();

  return (
    <div id="navbar">
      <div>Todo</div>
      <div>
        <input
          type="text"
          placeholder="search todo"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => navigate("/create")}>Create</button>
      </div>
    </div>
  );
};

export default Navbar;
