import React from "react";
import SubHeading from "./SubHeading";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Jhon Abraham",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sunt nostrum officiis, atque recusandae maxime suscipit unde dolor molestiae, tempore qui dolores odit quod ducimus possimus dolorem, consequuntur nemo fugit dolore! Repellat animi nesciunt nostrum rem harum perferendis similique doloribus enim, error, ad magnam assumenda veniam officiis cupiditate minima quos!",
    },
    {
      id: 2,
      name: "Jhon Abraham",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sunt nostrum officiis, atque recusandae maxime suscipit unde dolor molestiae, tempore qui dolores odit quod ducimus possimus dolorem, consequuntur nemo fugit dolore! Repellat animi nesciunt nostrum rem harum perferendis similique doloribus enim, error, ad magnam assumenda veniam officiis cupiditate minima quos!",
    },
    {
      id: 3,
      name: "Jhon Abraham",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sunt nostrum officiis, atque recusandae maxime suscipit unde dolor molestiae, tempore qui dolores odit quod ducimus possimus dolorem, consequuntur nemo fugit dolore! Repellat animi nesciunt nostrum rem harum perferendis similique doloribus enim, error, ad magnam assumenda veniam officiis cupiditate minima quos!",
    },
    {
      id: 4,
      name: "Jhon Abraham",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae sunt nostrum officiis, atque recusandae maxime suscipit unde dolor molestiae, tempore qui dolores odit quod ducimus possimus dolorem, consequuntur nemo fugit dolore! Repellat animi nesciunt nostrum rem harum perferendis similique doloribus enim, error, ad magnam assumenda veniam officiis cupiditate minima quos!",
    },
  ];
  return (
    <div className="bg-[white] max-md:p-4 px-[100px] py-[50px]">
      <SubHeading heading="Testimonials" subheading="Sense of Community" />

      <div className="flex justify-center">
        <div className="max-w-[600px] max-md:w-[350px]  shadow-lg relative rounded  ">
          <TestimonialSlider autoSlide={true} timeIntervel={15000}>
            {data.map((value, ind) => (
              <div className="min-w-[600px] max-md:min-w-[350px] max-md:h-[650px] h-[450px] bg-[white] p-5 rounded" key={ind}>
                <div className="flex justify-center text-6xl text-darkBlue my-5">
                  <BiSolidQuoteAltLeft />
                </div>
                <div className="text-lg capitalize">{value.content}</div>
                <div className="flex justify-center items-center mt-8 gap-5">
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" className="w-12 h-12 object-cover rounded-full" alt="" />
                    <div className="text-xl font-semibold text-[gray]">{value.name}</div>
                </div>
              </div>
            ))}
          </TestimonialSlider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
