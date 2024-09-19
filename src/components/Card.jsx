const Card = ({ id, name, occupation }) => {
  return (
    <>
      <div className="container flex justify-center">
        <div className="flex w-[370px] py-5 px-10 items-center gap-x-16 bg-white border rounded-xl shadow-md cursor-pointer">
          <div>
            <div className="bg-zinc-300 w-16 h-16 rounded-full">
              <img
                className="overflow-hidden"
                src={`https://avatar.iran.liara.run/public/boy?username=${id}`}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span>{name}</span>
            <span className="text-zinc-500 line-clamp-1">{occupation}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
