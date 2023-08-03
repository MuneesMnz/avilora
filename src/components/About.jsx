import React from "react";
import SubHeading from "./SubHeading";

const About = () => {
  return (
    <>
      <div id="about" className="text-[#f4f4f4]">
        .
      </div>
      <div className="mt-10 ">
        <SubHeading heading="About" subheading="Location and Geography" />
        <div className="flex justify-center max-md:flex-col gap-20 px-[100px] max-md:px-2 py-5">
          <div className="flex-[1]">
            <div className="overflow-hidden ml-10 max-md:ml-0 w-[500px] max-md:w-full">
              <img
                src="assets/images/webCovers/river.jpg"
                className="shadow-lg w-[500px] max-md:w-full duration-200  hover:scale-110 "
                alt=""
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="  tracking-widest flex flex-col gap-3">
              <span className="font-mono">
                കോഴിക്കോട് ജില്ലയിലെ താമരശ്ശേരി താലൂക്കിൽ കിഴക്കോത്ത്
                പഞ്ചായത്തിന്റെ തെക്ക് കിഴക്ക് ഭാഗത്ത് ഗ്രാമീണ അന്തരീക്ഷം നില
                നിൽക്കുന്ന ഒരു കുഗ്രമമാണ് ആവിലോറ.കിഴക്ക് : വാവാട്, തെക്ക്:
                വാവാട്, കിഴക്കോത്ത്, പടിഞ്ഞാറ്: എളേറ്റിൽ, വടക്ക് :എളേറ്റിൽ,
                വലിയപറമ്പ് എന്നീ ഗ്രാമങ്ങൾക്കിടയിലാണ് ഈ സുന്ദര നാടിന്റെ കിടപ്പ്.
                പഞ്ചായത്തിലെ 5, 6, 7വാർഡുകൾ മുഴുവനായും 4, 8 വാർഡുകൾ ഭാഗികമായും
                ഉൾപ്പെട്ടതാണ് ഇത്
              </span>
              <div className="mt-10 flex justify-start max-md:justify-center">
                <button className="w-[150px] h-[40px] bg-darkGreen text-[white] font-semibold rounded-md ">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
