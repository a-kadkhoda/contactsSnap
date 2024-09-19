import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const Toolbar = () => {
  const { setShowSearch } = useContext(MyContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowSearch(true);
    navigate("/");
  };

  return (
    <>
      <svg className="hidden">
        <symbol
          id="arrow-left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
            clipRule="evenodd"
          />
        </symbol>
        <symbol
          id="more"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
            clipRule="evenodd"
          />
        </symbol>
      </svg>

      <div className="container w-[60%] h-12 ">
        <div className="p-1 flex justify-around items-center">
          <button
            className=" text-zinc-500 shadow-md inline-block rounded-full hover:text-zinc-600"
            onClick={handleClick}
          >
            <svg className="h-10 w-10">
              <use href="#arrow-left" />
            </svg>
          </button>
          <button className=" text-zinc-500 shadow-md inline-block rounded-full hover:text-zinc-600">
            <svg className="h-10 w-10">
              <use href="#more" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
