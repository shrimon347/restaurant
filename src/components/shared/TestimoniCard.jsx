import { PlayIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import pattern from "../../assets/pattern.png";
import thumnail from "../../assets/thumnail.webp";

const TestimoniCard = ({ pic, desc, name, location }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto bg-white shadow-lg md:h-auto h-[650px] z-[200] overflow-hidden">
      <div className="bg-yellow-500  md:p-[100px] md:w-1/2   p-[30px] ">
        <blockquote className="text-black text-lg font-semibold">
          {desc}
        </blockquote>
        <div className="border-b-2 border-black relative">
          <div className="flex items-center justify-between mt-16 space-y-8">
            <div>
              <p className="text-black font-bold">{name}</p>
              <p className="text-black text-sm">{location}</p>
            </div>

            <div>
              <img src={pic} alt="Profile" className="w-12 h-12 rounded-full" />
              <div className="border-red-600 border-b-4  mt-5"></div>
            </div>
          </div>
          <div className="absolute top-[83px] -left-[38px] md:top-[65px] md:-left-[100px]">
            <img src={pattern} alt="" />
          </div>
        </div>
      </div>

      <div className="relative md:w-1/2 h-[400px] md:h-auto bg-cover bg-center">
        {isPlaying ? (
          <iframe
            className="absolute inset-0 w-full h-full "
            src="https://www.youtube.com/embed/leiDRydWKeA?si=8sSmu-nfmlgLjQn7/autoplay=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center "
            style={{ backgroundImage: `url(${thumnail})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 focus:outline-none"
                onClick={handlePlayClick}
              >
                <PlayIcon className="text-black h-7" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimoniCard;
