import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="flex items-center justify-between px-3">
        <div>
          <img src="/imgs/logo.svg" alt="logo" />
        </div>
        <div className="hidden lg:flex items-center text-sm px-3 gap-3 md:gap-5 md:text-lg cursor-pointer">
          <span className="text-white font-normal">Marketplace</span>
          <span className="text-white font-normal">Stats</span>
          <span className="text-white font-normal">Collections</span>
          <span className="text-white font-normal">Explore</span>
          <span className="text-white font-normal">Community</span>
        </div>
        <div>
          <img src="/imgs/fb.svg" alt="Links" className="object-cover" />
        </div>
      </div>
      <div className="lg:hidden my-10 flex items-center justify-center text-sm px-3 gap-3 cursor-pointer">
        <span className="text-white font-normal">Marketplace</span>
        <span className="text-white font-normal">Stats</span>
        <span className="text-white font-normal">Collections</span>
        <span className="text-white font-normal">Explore</span>
        <span className="text-white font-normal">Community</span>
      </div>
      <hr className="lg:hidden mx-auto w-[85%] text-white leading-0" />
      <div className="mx-auto text-center mt-4">
        <span className="font-normal text-xs text-[#CBD5E1]">
          © Copyright 2022, All Rights Reserved by Play Games
        </span>
      </div>
    </div>
  );
};

export default Footer;
