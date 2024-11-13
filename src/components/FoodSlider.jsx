import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import burger from "../assets/burger.png";
import capcicum from "../assets/capcicum.png";
import chicken from "../assets/chicken.png";
import french from "../assets/french.png";
import pizza from "../assets/pizza.png";
import "../components/shared/style.css";
import Heading from "./shared/Heading";
import SlideCard from "./shared/SlideCard";

const FoodSlider = () => {
  return (
    <div className="bg-[#FbF7F2] p-4 md:p-0">
      <div className="max-w-7xl mx-auto py-10">
        <div className="mt-5 mb-5 relative flex items-center justify-between">
          <Heading
            img={capcicum}
            title={"Crispy, Every Bite Taste"}
            desc={"POPULAR FOOD ITEMS"}
          />
          <div className="md:block hidden">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Navigation, Autoplay]}
        >
          {[burger, pizza, french, chicken, pizza, french, chicken, burger].map((pic, index) => (
            <SwiperSlide key={index}>
              <SlideCard
                title={"Sample Title"}
                desc={"Sample description"}
                pic={pic}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:hidden relative flex justify-center space-x-4 mt-20">
          <div className="swiper-button-prev bg-red-500 text-white p-3 rounded-full"></div>
          <div className="swiper-button-next bg-red-500 absolute !-top-2 !right-[160px] text-white p-3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodSlider;
