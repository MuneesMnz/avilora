import React from "react";
import PageHeading from "../PageHeading";
import HistoryPageCotainer from "./HistoryPageCotainer";

const HistoryHome = () => {
  return (
    <>
      <PageHeading haeding="History"  />

      <div className="px-[100px] py-[50px] max-md:px-4 max-md:py-8 max-lg:p-[50px] ">
        {[0, 1, 2, 3, 4].map((val) => (
          <HistoryPageCotainer  key={val} />
        ))}
      </div>
    </>
  );
};

export default HistoryHome;
