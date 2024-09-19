import { useContext } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import { MyContext } from "../context/MyContext";

const Layout = ({ children }) => {
  const { showSearch } = useContext(MyContext);

  return (
    <>
      {showSearch && <SearchBox />}
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
