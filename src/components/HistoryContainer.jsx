import React from "react";

const HistoryContainer = () => {
  return (
    <div className="w-[400px] max-md:w-[400px] h-[500px] shadow-lg rounded overflow-hidden bg-[white] ">
      <div className=" w-[400px] max-md:w-[400px] h-[250px] overflow-hidden">
        <img
          src="https://i.pinimg.com/474x/89/15/e7/8915e712e3609de14317fb9aea3e834f--old-homes-traditional-homes.jpg"
          className="w-full h-full duration-300 hover:scale-110"
          alt=""
        />
      </div>
      <div className="mt-5 p-2">
        <h3 className="text-xl font-semibold cursor-pointer">
          Heading Lorem ipsum dolor sit amet consectetur{" "}
        </h3>
        <p className="mt-2 text-[gray]">
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
          in ligula.libero ut justo, ultrices in ligula.Lorem ipsum viverra
          feugiat. Pellen....
        </p>
        <div className="mt-5 flex items-center justify-between ">
          <div className="flex gap-4 items-center ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <p> <span className="text-[gray]">by</span> John Philiph</p>
          </div>
          <div className="text-darkBlue underline cursor-pointer text-[17px] mr-1">
            view more
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryContainer;
