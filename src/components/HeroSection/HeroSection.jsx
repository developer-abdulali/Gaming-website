import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* text div */}
      <div className="text-white my-4 text-center text-lg sm:text-3xl md:text-4xl md:tracking-normal lg:text-6xl font-bold tracking-tighter lg:tracking-[-5px] font-custom">
        <h3>NEXT GENERATION GET YOUR</h3>
        <span> DESIERD RANK NOW</span>
      </div>
      <div className="relative container mx-auto w-[316px] sm:w-[450px] md:w-[847px] md:h-[524px] px-3 md:px-0 p-0 md:p-5">
        {/* img for border */}
        <div>
          <img src="/imgs/VectorBorder.png" alt="vector border" />
        </div>
        {/* vector icons img */}
        <div className="absolute top-1 left-[20px] sm:left-[20px] w-[275px] sm:w-[410px] md:top-2 md:left-[25px] md:w-full">
          <img src="/imgs/Vector.png" alt="vector pic" />
        </div>
        {/* play now icon div */}
        <div className="container mx-auto relative">
          <img
            src="/imgs/playicn.png"
            alt="play icon"
            className="absolute top-[-100px] sm:top-[-140px] left-[120px] md:top-[-240px] md:left-[330px] sm:left-[170px] w-10 sm:w-14 md:w-20"
          />
        </div>
        {/* register now btn of large screen */}
        <div className="relative">
          <button className="text-xs sm:text-lg md:text-2xl font-normal md:font-semibold absolute top-0 left-[107px] sm:left-40 md:left-[290px] z-10 text-white font-custom">
            REGISTER NOW
          </button>
          {/* vector bg  */}
          <div className="absolute top-[-22px] left-[82px] sm:top-[-20px] md:top-[-10px] sm:left-32 md:left-[215px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="317"
              height="64"
              viewBox="0 0 317 64"
              fill="none"
              className="w-36 sm:w-48 md:w-full"
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
      {/* twitch, roblox, chees, gamesradar div */}
      <div class="max-w-screen-xl my-5 md:my-0 mx-auto flex flex-row items-center justify-around">
        <div class="w-full md:w-auto lg:w-[102.847px] h-[63.893px] mb-4 md:mb-0">
          <img src="/imgs/twitch.svg" alt="Twitch" class="w-full h-full" />
        </div>
        <div class="w-full md:w-auto lg:w-[102.847px] md:h-[63.893px] mb-4 md:mb-0 text-white">
          <img src="/imgs/roblox.svg" alt="Roblox" class="w-full h-full" />
        </div>
        <div class="w-full md:w-auto lg:w-[102.847px] h-[63.893px] mb-4 md:mb-0">
          <img src="/imgs/chess.png" alt="Chess.com" class="w-full h-full" />
        </div>
        <div class="w-full md:w-auto lg:w-[102.847px] h-[63.893px] mb-4 md:mb-0">
          <img
            src="/imgs/gamesradar.svg"
            alt="Games Radar"
            class="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
