import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
