const CardInfo = ({
  id,
  name,
  age,
  email,
  website,
  occupation,
  phone,
  address,
}) => {
  const infoAddress = { ...address };

  return (
    <>
      <svg className="hidden">
        <symbol
          id="mail"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </symbol>
        <symbol
          id="message"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
            clipRule="evenodd"
          />
        </symbol>
        <symbol
          id="phone"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
            clipRule="evenodd"
          />
        </symbol>
      </svg>

      <div className="relative container">
        <div className="container bg-white relative flex flex-col justify-center items-center w-[30%] space-y-12 p-8 border shadow-md rounded-lg z-10">
          <div className="absolute -top-12 ">
            <div className="w-24 h-24 bg-slate-200 rounded-full shadow-sm">
              <img
                className="overflow-hidden"
                src={`https://avatar.iran.liara.run/public/boy?username=${id}`}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>{name}</span>
            <span className="text-zinc-400">{email}</span>
          </div>
          <div className="grid grid-cols-2 w-full divide-x">
            <div className="flex flex-col items-center justify-center">
              <span>{website}</span>
              <span className="text-zinc-400">{occupation}</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>Phone : {phone}</div>
              <div className="text-zinc-400">age : {age}</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10 pb-10 child:cursor-pointer child:rounded-full child:shadow child:border child:flex child:justify-center child:items-center">
            <div className="w-10 h-10 bg-purple-600">
              <svg className="h-5 w-5 text-white">
                <use href="#mail" />
              </svg>
            </div>
            <div className="w-10 h-10 bg-blue-600">
              <svg className="h-5 w-5 text-white scale-x-[-1]">
                <use href="#message" />
              </svg>
            </div>
            <div className="w-10 h-10 bg-green-600">
              <svg className="h-5 w-5 text-white">
                <use href="#phone" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute top-[130%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 container flex flex-col justify-center items-start w-[40%] px-10 bg-white shadow border rounded">
          <div className="space-y-5 py-10 ">
            <div className="flex flex-col">
              <span className="text-zinc-400 text-sm">street:</span>
              <span>{infoAddress.street}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-400 text-sm">city:</span>
              <span>{infoAddress.city}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-400 text-sm">zip:</span>
              <span>{infoAddress.zip}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
