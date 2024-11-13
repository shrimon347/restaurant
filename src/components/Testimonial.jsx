import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import tomato from "../assets/tomato.png";
import "../components/shared/style.css";
import Heading from "./shared/Heading";
import TestimoniCard from "./shared/TestimoniCard";
import people from "../assets/people.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import leaf from "../assets/leaf.png"

const Testimonial = () => {
  return (
    <div className="p-4 md:p-0 mb-14">
      <div className="max-w-7xl mx-auto py-10">
        <div className="mt-5 mb-5 relative flex items-center justify-between">
          <Heading
            img={tomato}
            title={"Crispy, Every Bite Taste"}
            desc={"WHAT SOME OF MY CUSTOMER SAY"}
          />
          <div className="md:block hidden">
            <div className="swiper-button-prev-test">
              <ChevronLeftIcon className="h-8" />
            </div>
            <div className="swiper-button-next-test">
              <ChevronRightIcon className="h-8" />
            </div>
          </div>
          <div className="absolute hidden md:block md:-right-[292px] md:top-[110px]">
            <img src={leaf} alt="" />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-test",
            prevEl: ".swiper-button-prev-test",
          }}
          modules={[Navigation, EffectCoverflow]}
        >
          <SwiperSlide>
            <TestimoniCard pic={people} desc={`“You can't go wrong with Chicken Mandi, I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would defiantly recommend it.”`} name={'Khalid Al Dawsry'} location={'Jeddah, Saudi'} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniCard pic={people} desc={`“You can't go wrong with Chicken Mandi, I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would defiantly recommend it.”`} name={'Rimon Mridha'} location={'Dhaka, Bangladesh'} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimoniCard pic={people} desc={`“You can't go wrong with Chicken Mandi, I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would defiantly recommend it.”`} name={'Dawsry Khalid '} location={'Jeddah, Saudi'} />
          </SwiperSlide>
        </Swiper>
        <div className="md:hidden relative flex justify-center space-x-4 mt-20">
          <div className="swiper-button-prev-test bg-red-500 text-white p-1 rounded-full">
            <ChevronLeftIcon className="h-8" />
          </div>
          <div className="swiper-button-next-test bg-red-500 absolute !-top-2 !right-[160px] text-white p-1 rounded-full">
            <ChevronRightIcon className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
