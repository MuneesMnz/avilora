import React from "react";
import HistoryContainer from "./HistoryContainer";
import SubHeading from "./SubHeading";

const HIstory = () => {
  return (
    <div className=" bg-[white] max-md:p-4 px-[100px] py-[50px]">
      <SubHeading
        heading="History"
        subheading="Notable Figures in the Village's History"
      />
      <div className="flex gap-9 flex-wrap justify-center max-md:justify-center">
        <HistoryContainer />
        <HistoryContainer />
        <HistoryContainer />
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-10 py-2 bg-darkGreen text-[white] font-semibold text-xl rounded-md ">
          View All{" "}
        </button>
      </div>
    </div>
  );
};

export default HIstory;
