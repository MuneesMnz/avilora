import React from "react";

const SliderCard = ({item}) => {
  return (
    <div className="card bg-[white] w-[350px] max-md:h-[500px] h-[400px] rounded-lg shadow-lg m-3 mx-[60px] max-md:m-2.5">
      <div className="flex justify-center">
        <img
          src={item.imgUrl}
          alt=""
          className="w-[250px] h-[250px] rounded-full object-cover p-2"
        />
      </div>
      <div className="flex flex-col justify-evenly gap-1 items-start py-2 px-5">
        <div className="text-2xl font-semibold">{item.name}</div>
        <div className=" text-sm">{item.carrer}</div> 
        <div className="text-[gray]">{item.place}</div>
      </div>
    </div>
  );
};

export default SliderCard;
