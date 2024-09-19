import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Bookmarks = () => {
  const { bookmarks, setShowSearch } = useContext(MyContext);
  const [bookUsers, setBookUsers] = useState([]);
  const navigate = useNavigate();

  const recent = bookUsers.slice(-4);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    bookmarks.forEach((id,index) => {
      if(id === bookmarks[index-1]) return
      getUser(signal, id);
    });

    return () => {
      controller.abort();
    };
  }, [bookmarks]);

  const getUser = async (signal, id) => {
    try {
      const res = await axios.get(
        `https://freetestapi.com/api/v1/users/${id}`,
        { signal }
      );
      if (res.status === 200) {
        setBookUsers((prev) => [...prev, res.data]);
      } else {
        console.error(`HTTP error! Status: ${res.status}`);
      }
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error(error);
      }
    }
  };

  const handleRoute = (id) => {
    navigate(`/cardinfo/${id}`);
    setShowSearch(false);
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
