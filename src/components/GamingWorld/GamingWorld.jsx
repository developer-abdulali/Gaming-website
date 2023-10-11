import React from "react";

const GamingWorld = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <div className="px-3">
        <div className="text-white my-4 text-lg sm:text-3xl md:text-4xl md:tracking-normal lg:text-6xl font-bold tracking-tighter lg:tracking-[-5px] font-custom">
          <p className="text-left">WE’RE THE FIRST GAMING</p>
          <span className="text-left">AWARD WINNERS THE WORLD</span>
        </div>
      </div>
      <div className="flex items-center text-sm px-3 gap-3 md:gap-5  md:text-lg">
        <span className="text-[#e15223] font-bold">Adventure</span>
        <span className="text-white font-normal">Acrade</span>
        <span className="text-white font-normal">Arena</span>
        <span className="text-white font-normal">Avoider</span>
        <span className="text-white font-normal">Balance</span>
      </div>

      <div className="px-3 flex items-center flex-col md:flex-row gap-5 mt-5">
        <div className="">
          <img src="/imgs/alpha1.svg" className="object-cover" alt="Alpha 1 " />
        </div>
        <div className="">
          <img src="/imgs/alpha2.svg" className="object-cover" alt="Alpha 2 " />
        </div>
        <div className="">
          <img src="/imgs/alpha3.svg" className="object-cover" alt="Alpha 3 " />
        </div>
        <div className="">
          <img src="/imgs/alpha4.svg" className="object-cover" alt="Alpha 4 " />
        </div>
      </div>
    </div>
  );
};

export default GamingWorld;
