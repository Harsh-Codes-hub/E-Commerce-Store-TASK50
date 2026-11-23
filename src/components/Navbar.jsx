import { NavLink } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="bg-red-100">
      <Container>
        <div>
          <div>
            <NavLink to="/" className="text-white">
              E-STORE
            </NavLink>
          </div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shops</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
