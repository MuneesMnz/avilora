import React from "react";

const HistoryItem = () => {
  const content =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,tempora sed obcaecati laudantium accusamus tempore, aut voluptatibus excepturi tenetur, est libero. Enim, quas veniam error vel velit assumenda soluta corrupti / magni molestiae, itaque nesciunt. ullam laborum illo voluptatibus neque at molestias quia, tempora quos Consequatur enim animi iste ipsum fugiat eum quod rerum perferendis eaque quis. Deleniti suscipit / molestiae adipisci animi recusandae ipsam! In enim dolore pariatur assumenda culpa reiciendis ipsa ducimus voluptas voluptates. Incidunt delectus similique laboriosam alias, sed veniam dolores, pariatur explicabo est et architecto amet distinctio soluta beatae corporis obcaecati quia cumque doloribus ratione totam? Quos distinctio aliquid mollitia qui numquam recusandae cupiditate veniam eius minima? Eaque ipsam, facere, esse quo dolorum vitae hic maiores assumenda laborum, saepe dicta commodi quam. Cum magnam soluta eos qui, aliquid ipsa similique, porro eveniet amet unde consequatur tenetur sint quo dolore facere ratione perferendis corrupti ab dolorem officia asperiores consectetur molestias iste. Cumque dicta asperiores et voluptas veritatis! Numquam nesciunt libero adipisci fugiat deleniti eius veniam est recusandae pariatur sapiente nam repellendus impedit sint ab, voluptate obcaecati quos soluta vero aut, voluptatum blanditiis dolor voluptatem repudiandae? Voluptate in quasi/ provident, reiciendis odio molestiae debitis eius quam, tenetur illo pariatur fugiat reprehenderit facere. Quasi fugiat beatae debitis placeat officia deserunt facere nesciunt itaque, in cumque amet perferendis libero soluta atque facilis pariatur id? Aut consequatur dolorem, recusandae sequi facere maxime nam ducimus itaque, eligendi perspiciatis fugiat suscipit? Itaque nam perspiciatis distinctio minus obcaecati eius sunt praesentium accusantium! Autem nulla consectetur nesciunt excepturi doloremque ipsam quibusdam sed fuga sapiente hic omnis, perferendis suscipit aliquid a? Corporis molestiae alias quia porro voluptatum quod enim error eum, consequuntur neque fugit, non dignissimos, autem commodi eos unde facere nisi eligendi numquam excepturi! Beatae, laudantium explicabo! At, sunt. Dolorem nemo rem in harum alias aliquam, vero porro distinctio quidem ad reiciendis, quaerat libero aut odio est beatae molestias nihil dolorum numquam./ Modi, dicta, suscipit soluta tenetur quas in veniam aliquid nam, quo sit fuga sunt cupiditate repellendus deserunt asperiores ad tempore? Blanditiis temporibus animi quia itaque doloribus, magni quae mollitia assumenda qui ipsum. Ad accusamus sit nulla alias? Accusantium itaque repellendus eveniet doloremque quasi nobis debitis, expedita delectus ";

  let abc = content.split(/[/]/).filter((sentence) => sentence.trim() !== "");
  // console.log(abc);
  return (
    <div className="pt-[80px] px-[200px] max-md:p-4 flex justify-start items-center  flex-col">
      <img
        src="https://c0.wallpaperflare.com/preview/568/723/728/holidays-india-village.jpg"
        className="w-full h-[450px] max-md:h-auto object-cover shadow mb-10 "
        alt=""
      />
      <div className="w-[800px] max-md:w-auto flex flex-col gap-4 justify-center ">
        <div className="text-3xl text-center  ">
          Heading Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quam, aliquam.
        </div>
        <div className="text-sm text-[gray] tracking-wide flex justify-center">
          Avilora &#183; 05 Aug 2023{" "}
        </div>
        <div className="text-sm text-[gray] tracking-wide flex justify-center">
          #tagslike #food #culture #etc..
        </div>
        <div>
          {abc.map((value, index) => {
            return (
              <div key={index}>
                {index === 0 ? (
                  <div>
                    {" "}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; {value}
                  </div>
                ) : (
                  <>
                    <div>
                      {" "}
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; {value}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex justify-start items-center p-5">
          <img
            src="https://t4.ftcdn.net/jpg/01/15/85/23/360_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg"
            alt=""
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className=" ml-3">
            <p>By <span className="font-semibold">Abdul Kalam</span></p>
            <p className="text-[gray]">Aditional text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
