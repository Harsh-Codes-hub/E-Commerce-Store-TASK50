import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeIcon = (theme === "light") ? "ri-sun-fill" : "ri-moon-fill";
  return (
    <header className="border-b border-(--border-muted) nav-shadow sticky top-0 left-0"
    style={{background: "var(--gradient-b)"}}>
      <Container>
        <div className="py-4 flex gap-6 justify-between items-center">
          <div className="border-b-2 border-(--text) py-1">
            <NavLink to="/" className="text-6xl text-(--text)">
              E-STORE
            </NavLink>
          </div>
          <nav className="flex justify-center items-center gap-5 text-2xl">
            <NavLink to="/" className="text-(--text)">
              Home
            </NavLink>
            <span className="text-(--text-muted)">|</span>
            <NavLink to="/shop" className="text-(--text)">
              Shop
            </NavLink>
            <span className="text-(--text-muted)">|</span>
            <NavLink to="/cart" className="text-(--text)">
              Cart
            </NavLink>
          </nav>
          <button
            type="button"
            className="theme-btn h-10 aspect-square rounded-full text-2xl"
            onClick={() => {
              toggleTheme();
            }}
          >
            <i className={`${themeIcon}`}></i>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
