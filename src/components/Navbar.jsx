import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const Navbar = () => {
  const { setShowSearch } = useContext(MyContext);

  const handleClick = () => {
    setShowSearch(true);
  };
  const handleClickBook = () => {
    setShowSearch(false);
  };

  return (
    <>
      <svg className="hidden">
        <symbol
          id="users"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </symbol>
        <symbol
          id="bookmark"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
          />
        </symbol>
      </svg>

      <nav className="fixed bottom-0 w-full h-16 border-t shadow backdrop-blur-md z-50">
        <div className=" h-full grid grid-cols-2 divide-x-2 items-center child-hover:bg-zinc-200  child:transition-colors child:h-full child:w-full">
          <Link
            to={"/"}
            onClick={handleClick}
            className="flex justify-center items-center gap-x-3"
          >
            <svg className="w-8 h-8">
              <use href="#users" />
            </svg>
            <span>Contacts</span>
          </Link>
          <Link
            to={"/bookmark"}
            onClick={handleClickBook}
            className="flex justify-center items-center gap-x-3"
          >
            <svg className="w-8 h-8">
              <use href="#bookmark" />
            </svg>
            <span>Bookmarks</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
