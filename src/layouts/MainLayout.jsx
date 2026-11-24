import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Container from "../components/Container";

const MainLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} bg-(--bg-dark) theme-transition`}>
      <Navbar />
      <main className="w-full flex flex-col items-center min-h-[85vh]">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
