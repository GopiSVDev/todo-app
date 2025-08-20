import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div id="navbar">
      <div>Todo</div>
      <div>
        <input type="text" placeholder="search todo" />
      </div>
      <div>
        <button onClick={() => navigate("/create")}>Create</button>
      </div>
    </div>
  );
};

export default Navbar;
