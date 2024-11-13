import React from "react";

const Heading = ({title, desc, img}) => {
  return (
    <>
      <div className="font-bold">
        <div className="text-[#BD1F17] flex items-center gap-2">
          <p className="h-2 w-2 bg-[#BD1F17]"></p> {title}
        </div>
        <p className="text-2xl uppercase font-semibold">{desc}</p>
      </div>
      
      {img ? <div className="absolute lg:top-14 lg:-left-[300px] hidden md:hidden lg:block">
        <img src={img} alt="" className="w-[150px]" />
      </div> : <div></div>}
    </>
  );
};

export default Heading;
