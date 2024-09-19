import { useContext, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [filterdContacts, setFilterdContacts] = useState([]);
  const { input, refValue, setShowSearch, setBookmarks, bookmarks } =
    useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getContacts(signal);

    return () => {
      controller.abort();
    };
  }, []);

  /* get contact frpm api */
  const getContacts = async (signal) => {
    try {
      const res = await axios.get("https://freetestapi.com/api/v1/users", {
        signal,
      });

      if (res.status === 200) {
        setContacts(res.data);
        setIsLoading(false);
      } else {
        console.error(`HTTP error! Status: ${res.status}`);
      }
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    const users = [...contacts];

    const filtered = users.filter((item) => {
      const name = item.name.toLowerCase().includes(input.toLowerCase());
      const phone = item.phone.replaceAll("-", "").includes(input);
      if (input.startsWith("555")) {
        return phone;
      } else {
        return name;
      }
    });
    if (filtered.length === 0) {
      setFilterdContacts(users);
    } else setFilterdContacts(filtered);
  }, [input, contacts]);

  const handleRoute = (id) => {
    setShowSearch(false);
    setBookmarks([...bookmarks, id]);
    navigate(`/cardinfo/${id}`);
  };

  return (
    <div className="container mt-10 mb-20">
      <div className="p-2 border-b-2 shadow">
        <span>Contacts</span>
      </div>
      <div className="min-h-full w-max m-auto mt-10 px-3 space-y-5 ">
        {isLoading ? (
          <Loading />
        ) : refValue === "" ? (
          contacts.map((item, index) => {
            return (
              <div key={index} onClick={() => handleRoute(item.id)}>
                <Card {...item} />
              </div>
            );
          })
        ) : (
          filterdContacts.map((item, index) => {
            return (
              <div key={index} onClick={() => handleRoute(item.id)}>
                <Card {...item} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
