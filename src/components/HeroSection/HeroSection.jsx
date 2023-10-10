import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <div className="text-white my-4 text-center text-lg sm:text-3xl md:text-4xl md:tracking-normal lg:text-6xl font-bold tracking-tighter lg:tracking-[-5px] font-custom">
        <h3>NEXT GENERATION GET YOUR</h3>
        <span> DESIERD RANK NOW</span>
      </div>
      <div className="relative mx-auto w-[316px] sm:w-[450px] md:w-[847px] md:h-[524px] px-3 md:px-0 p-0 md:p-5">
        <div className="">
          <img src="/imgs/VectorBorder.png" alt="vector border" />
        </div>
        <div className="absolute top-1 left-[20px] sm:left-[20px] w-[275px] sm:w-[410px] md:top-2 md:left-[25px] md:w-full">
          <img src="/imgs/Vector.png" alt="vector pic" />
        </div>
        <div className="relative">
          <img
            src="/imgs/playicn.png"
            alt="play icon"
            className="absolute top-[-100px] sm:top-[-140px] left-[120px] md:top-[-240px] md:left-[330px] sm:left-[170px] w-10 sm:w-14 md:w-20"
          />
        </div>
        <div className="relative">
          <button className="absolute top-3 left-0 md:left-[310px] z-10 text-white">
            REGISTER NOW
          </button>
          <div className="absolute top-[-22px] sm:top-[-20px] md:top-[-10px] left-20 sm:left-32 md:left-[215px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="317"
              height="64"
              viewBox="0 0 317 64"
              fill="none"
              className="w-32 sm:w-48 md:w-full"
            >
              <path
                d="M0.17627 0.706055L40.0675 63.7061H277.089L316.981 0.706055H0.17627Z"
                fill="url(#paint0_linear_1_1750)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1750"
                  x1="0.176269"
                  y1="47.4311"
                  x2="306.548"
                  y2="54.4869"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C1260F" />
                  <stop offset="1" stop-color="#EE642A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto my-5 flex items-center justify-around">
        <div className="w-[102.847px] h-[63.893px]">
          <img src="/imgs/twitch.png" alt="" className="" />
        </div>
        <div className="w-[102.847px] h-[63.893px] text-white">
          <img src="/imgs/twitch.png" alt="" className="" />
        </div>
        <div className="w-[102.847px] h-[63.893px]">
          <img src="/imgs/twitch.png" alt="" className="" />
        </div>
        <div className="w-[102.847px] h-[63.893px]">
          <img src="/imgs/twitch.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
