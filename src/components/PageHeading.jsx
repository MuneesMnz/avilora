import React from "react";

const PageHeading = ({haeding}) => {
  return (
    <div className="w-full py-[100px] flex justify-center bg-[url('https://cdn.wallpapersafari.com/61/54/gFwdCK.jpg')] flex-col items-center gap-3">
      <div className="text-5xl font-Arvo font-[500] text-darkBlue ">
        {haeding}
      </div>
      <div className="text-[gray]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
        maiores.
      </div>
    </div>
  );
};

export default PageHeading;
