import { NavLink } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="border-b border-gray-500">
      <Container>
        <div className="py-4 flex flex-col gap-6">
          <div className="text-center border-b-2 py-1 w-fit mx-auto">
            <NavLink to="/" className="text-6xl">
              E-STORE
            </NavLink>
          </div>
          <nav className="flex justify-center items-center gap-5 text-2xl">
            <NavLink to="/">Home</NavLink>
            <span>|</span>
            <NavLink to="/shop">Shop</NavLink>
            <span>|</span>
            <NavLink to="/cart">Cart</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
