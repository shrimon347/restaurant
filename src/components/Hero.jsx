import hero from "../assets/hero.png";
import offer from "../assets/Offer.png";
import vec from "../assets/Vector.png";
import Button from "./shared/Button";

const Hero = () => {
  return (
    <section className=" bg-gradient-to-r from-[#bd1f17] via-[#A51D13] to-[#be1b0f] text-white h-[850px] p-8 md:p-16 ">
      <div className="max-w-7xl mx-auto p-4 md:relative grid grid-col-1">
        <div className=" md:absolute z-50 md:space-y-0 space-y-6 md:mb-0 mb-10">
          <div className="bg-[#b61e16] text-[30px] md:text-[70px]  md:relative md:w-2/3  font-bold md:leading-[100px] md:top-[120px] bg-opacity-40">
            <h1 className=" ">TASTE THE AUTHENTIC SAUDI CUISINE</h1>
          </div>
          <p className="text-base md:text-lg md:relative md:top-[140px] md:w-1/3">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <Button text="Explore Menu" font={"md:relative md:top-[170px]"} />
        </div>
        <div className="relative">
          <img
            src={vec}
            alt="offer"
            className="absolute -right-[30px] -top-[35px]  md:w-[45px] md:h-[45px] md:object-cover"
          />
          <img
            src={hero}
            alt="Saudi Cuisine"
            className="absolute right-0 md:w-[700px] md:h-[649px] object-cover"
          />
          <img
            src={offer}
            alt="offer"
            className="absolute right-0 md:-right-[60px] top-[210px] md:top-[545px] w-[100px] h-[100px]  md:w-[120px] md:h-[120px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
