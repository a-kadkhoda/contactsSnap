import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import DefaultPage from "./pages/DefaultPage";
import { MyProvider } from "./context/MyContext";
import ContactsInfo from "./pages/ContactsInfo";
import Bookmarks from "./pages/Bookmarks";


function App() {


  return (
    <>

      <Router>
        <MyProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmark" element={<Bookmarks />} />
            <Route path="/cardinfo/:id?" element={<ContactsInfo />} />
            <Route path="*" element={<DefaultPage />} />
          </Routes>
        </Layout>
        </MyProvider>
      </Router>

    </>
  );
}

export default App;
