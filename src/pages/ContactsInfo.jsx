import { useParams } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Toolbar from "../components/Toolbar";
import { MyContext } from "../context/MyContext";

const ContactsInfo = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const {setShowSearch}= useContext(MyContext)
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setShowSearch(false)
    getUser(signal);

    return () => {
      controller.abort();
    };
  }, []);

  const getUser = async (signal) => {
    try {
      const res = await axios.get(
        `https://freetestapi.com/api/v1/users/${id}`,
        { signal }
      );
      if (res.status === 200) {
        setUser(res.data);
      } else {
        console.error(`HTTP error! Status: ${res.status}`);
      }
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="min-h-full">
        <div className="mt-10">
          <Toolbar />
        </div>
        <div className="mt-10 mb-80 px-3 space-y-5 ">
          <CardInfo {...user} />
        </div>
      </div>
    </>
  );
};

export default ContactsInfo;
