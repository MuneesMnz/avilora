import React from "react";

const HistoryPageCotainer = () => {
  return (
    <div
      className="p-10 max-md:p-3 flex max-sm:flex-col items-center gap-10 max-md:gap-5 bg-[white] rounded shadow-md mb-5"

    >
      <img
        src="https://images.unsplash.com/photo-1566596682846-8ecf8d2e907c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt=""
        className="w-[300px] h-[200px] shadow-md "
      />
      <div className="flex flex-col">
        <div className="text-lg font-lighter text-[gray]">TAGS</div>
        <div className="text-2xl font-semibold  tracking-wide cursor-pointer hover:underline">
          Heading Lorem ipsum dolor sit amet.
        </div>
        <div className="text-sm text-[gray] mb-3">by jhon philiph</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          placeat possimus voluptate totam amet velit explicabo deserunt ab
          delectus cupiditate magni maxime magnam aperiam, ipsam nesciunt a
          architecto fugit fuga sint exercitationem porro. Iusto, optio. Ratione
          cum sint minima ipsa aperiam velit maxime explicabo corrupti totam,
          facilis praesentium rerum consequatur.
        </div>
        <div className="text-darkBlue  underline flex justify-end mr-10 cursor-pointer">
          Read more
        </div>
      </div>
    </div>
  );
};

export default HistoryPageCotainer;
