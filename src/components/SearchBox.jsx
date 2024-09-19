import { useContext, useRef } from "react";
import { MyContext } from "../context/MyContext";

const SearchBox = () => {
  const { input, setInput, setRefValue } = useContext(MyContext);
  const inputValue = useRef(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    if (inputValue.current) {
      setRefValue(inputValue.current.value);
    }
  };

  return (
    <>
      <svg className="hidden">
        <symbol
          id="search"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </symbol>
      </svg>

      <div className="relative flex mx-auto mt-16 w-[80%] sm:w-[60%] md:w-[40%] h-14 rounded-xl border shadow">
        <div className="absolute top-4 left-4">
          <svg className="h-6 w-6">
            <use href="#search" />
          </svg>
        </div>
        <input
          className="w-full h-full pl-16 outline-none rounded-xl"
          ref={inputValue}
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="search ..."
        />
      </div>
    </>
  );
};

export default SearchBox;
