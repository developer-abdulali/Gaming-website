// import React from "react";

// const PlayNow = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto relative my-5 flex items-center">
//       <div>
//         <img src="/imgs/playNowSVG1.svg" alt="Play now " />
//         <img
//           src="/imgs/playNowSVG.svg"
//           alt="play now svg"
//           className="absolute top-[400px] left-8"
//         />
//         <button className="absolute left-28 text-3xl font-medium text-white">
//           Play Now
//         </button>
//       </div>
//       <div>
//         <img src="/imgs/playNowSVG2.svg" alt="Play now " />
//         <img
//           src="/imgs/playNowSVG.svg"
//           alt="play now svg"
//           className="absolute top-[400px] left-8"
//         />
//         <button className="absolute left-28 text-3xl font-medium text-white">
//           Play Now
//         </button>
//       </div>
//       <div>
//         <img src="/imgs/playNowSVG3.svg" alt="Play now " />
//         <img
//           src="/imgs/playNowSVG.svg"
//           alt="play now svg"
//           className="absolute top-[400px] left-8"
//         />
//         <button className="absolute left-28 text-3xl font-medium text-white">
//           Play Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PlayNow;

import React from "react";
import PropTypes from "prop-types";

const PlayNowCard = ({ imgSrc, altText }) => {
  return (
    <div className="relative mb-5 md:mr-5 border-2 border-[#A1A1A1] rounded-[13px]">
      <img src={imgSrc} alt={altText} className="w-full" />
      <img
        src="/imgs/playNowSVG.svg"
        alt="play now svg"
        className="absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <button className="absolute top-[95%] left-1/2 transform -translate-x-1/2 text-3xl font-medium text-white">
        Play Now
      </button>
    </div>
  );
};

PlayNowCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

const PlayNow = () => {
  return (
    <>
      <div className="px-5 max-w-screen-xl mx-auto my-5 flex flex-col justify-between md:flex-row md:items-center">
        <PlayNowCard imgSrc="/imgs/playNowSVG1.svg" altText="Play now 1" />
        <PlayNowCard imgSrc="/imgs/playNowSVG2.svg" altText="Play now 2" />
        <PlayNowCard imgSrc="/imgs/playNowSVG3.svg" altText="Play now 3" />
      </div>
    </>
  );
};

export default PlayNow;
