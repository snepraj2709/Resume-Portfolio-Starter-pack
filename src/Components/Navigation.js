import { useLocation, useNavigate } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" title="Show navigation" href="/">
        Show navigation
      </a>
      <a className="mobile-btn" title="Hide navigation" href="/">
        Hide navigation
      </a>

      <ul id="nav" className="nav">
        <li className={location.pathname === "/" ? "current" : null}>
          <a href="/" className="smoothscroll" onClick={() => navigate("/")}>
            Home
          </a>
        </li>
        <li className={location.pathname === "/about" ? "current" : null}>
          <a
            href="/about"
            className="smoothscroll"
            onClick={() => navigate("/about")}>
            About
          </a>
        </li>
        <li
          className={location.pathname === "/work" ? "current" : null}
          onClick={() => navigate("/work")}>
          <a href="/work" className="smoothscroll">
            Work
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
