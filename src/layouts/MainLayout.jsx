import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/common/BackToTop";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
      <BackToTop/>
    </>
  );
};

export default MainLayout;
