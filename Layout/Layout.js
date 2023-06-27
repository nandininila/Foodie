import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
