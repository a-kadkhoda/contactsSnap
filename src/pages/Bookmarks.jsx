import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Bookmarks = () => {
  const { setShowSearch } = useContext(MyContext); 
  const [recent,setRecent] = useState([])

  const navigate = useNavigate();


  useEffect(() => {
    setShowSearch(false);
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    const lastRecent = bookmarks.slice(-4)
    setRecent(lastRecent)

    
  }, []);


  const handleRoute = (id) => {
    navigate(`/cardinfo/${id}`);

  };

  return (
    <>
      <div className="container mt-20 px-3">
        <div className="p-2 border-b-2 shadow">
          <span>Recents</span>
        </div>
        <div className="mb-20 mt-12 space-y-5">
          {recent.map((item, index) => {
            return (
              <div key={index} onClick={() => handleRoute(item.id)}>
                <Card {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
