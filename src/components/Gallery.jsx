import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import SubHeading from "./SubHeading";

const config = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

const Gallery = () => {
  const slider1 = "/assets/images/webCovers/slide1.jpg";
  const slider2 = "/assets/images/webCovers/slide2.jpg";
  const slider3 = "/assets/images/webCovers/slide3.jpg";
  const data = [
    {
      id: 1,
      img: slider1,
    },
    {
      id: 2,
      img: slider2,
    },
    {
      id: 3,
      img: slider3,
    },
    {
      id: 4,
      img: slider1,
    },
    {
      id: 5,
      img: slider2,
    },
    {
      id: 6,
      img: slider3,
    },
  ];

  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (item, index) => {
    setCurrentImage(item.img);
    setCurrentIndex(index);
  };

  const handleClickRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].img;
      setCurrentImage(newUrl);
      return;
    }

    const nextIndex = (currentIndex + 1) % totalLength;
    setCurrentImage(data[nextIndex].img);
    setCurrentIndex(nextIndex);
  };
  const handleClickLeft = () => {
    const totalLength = data.length;
    if (currentIndex <= 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].img;
      setCurrentImage(newUrl);
      return;
    }
    const prevIndex = (currentIndex - 1 + totalLength) % totalLength;
    setCurrentImage(data[prevIndex].img);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);

    const imgs = document.querySelectorAll("[data-src]");

    imgs.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  const loadImage = (image) => {
    image.src = image.dataset.src;
  };

  return (
    <div className="px-[100px] py-[50px] max-md:p-4 ">
      <SubHeading
        heading={"Gallery"}
        subheading="Scenic Beauty of the Village"
      />

      <div className="flex gap-3 flex-wrap justify-center ">
        {data.map((item, index) => (
          <div
            className="w-[400px] h-[250px] relative overflow-hidden group cursor-pointer"
            key={item.id}
          >
            <img
              src=""
              data-src={item.img}
              className=" w-[400px] h-[250px]  object-cover "
              alt=""
            />
            <div className="w-full h-full bg-darkGreen/30 flex flex-col items-center justify-center gap-10 absolute -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
              <div className="text-xl text-[white] font-semibold">
                abc Headign
              </div>
              <div>
                <button
                  className="w-[100px]  px-2 py-1.5  rounded text-[white] bg-[white]/30"
                  onClick={() => handleClick(item, index)}
                >
                  click me
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {currentImage && (
          <ImageModal
            setCurrentImage={setCurrentImage}
            currentImage={currentImage}
            handleClickRight={handleClickRight}
            handleClickLeft={handleClickLeft}
          />
        )}
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-10 py-2 bg-darkGreen text-[white] font-semibold text-xl rounded-md hover:shadow-md ">
          View More
        </button>
      </div>
    </div>
  );
};

export default Gallery;
