import { createContext, useEffect, useState } from "react";


const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [refValue, setRefValue] = useState(null);
  const [showSearch, setShowSearch] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(()=>{
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks))

    return ()=>{
      localStorage.clear()
    }
  },[bookmarks])
  return (
    <MyContext.Provider
      value={{
        input,
        setInput,
        refValue,
        setRefValue,
        showSearch,
        setShowSearch,
        setBookmarks,
        bookmarks,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
