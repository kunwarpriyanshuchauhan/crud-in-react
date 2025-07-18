import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <header>
      <h2>My React Vite App</h2>
      {children}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/update">update</Link>
        <Link to="/delete">delete</Link>
        <Link to="/insert">insert</Link>
            <Link to="/view">View</Link>    <Link to="/page7">Page 7</Link>
      </nav>
    </header>
  );
}

export default Header;
