import React from "react";

import CheckedIcon from "../../../assets/images/svg/checked.svg";
import SecuredIcon from "../../../assets/images/svg/secured.svg";
import ReeddiLogo from "../../../assets/images/svg/logo/reeddi.svg";
const TopSection = () => {
  return (
    <>
      <div className="search-section w-full box-border rounded-xl relative">
        <div className="absolute origin-top-left top-0 h-full px-10 sm:px-12 md:px-14 lg:px-16">
          <div className="flex flex-col justify-center h-full">
            <h2 className="font-serif text-temp-white text-2xl text-left md:text-3xl lg:text-5xl">
              Own anything temporarily
            </h2>
            <form className="pt-4 pb-4 text-left md:pt-8 md:pb-4 lg:pt-12 lg:pb-8">
              <input
                className="rounded-lg placeholder-temp-secondary text-xs sm:text-base w-full h-12 sm:h-12 md:h-16 lg:h-16 px-6 text-temp-secondary focus:outline-none"
                placeholder="What do you want to rent today?"
                type="text"
              />
            </form>
            <p className="text-temp-white text-left text-sm">
              <span className="font-bold ">Suggested:</span> Drone, Car, Reeddi
              Capsule, Tractor
            </p>
          </div>
        </div>
      </div>
      <div className="relative pt-4 py-8">
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-grow mt-4">
            <div className="flex items-center mr-8">
              <img className="mr-2" src={CheckedIcon} alt="" />
              <p className="text-temp-green text-sm-15 font-serif">
                Verified Lenders
              </p>
            </div>
            <div className="flex items-center mr-8">
              <img className="mr-3" src={CheckedIcon} alt="" />
              <p className="text-temp-green text-sm-15  font-serif">
                Verified Borrowers
              </p>
            </div>
            <div className="flex items-center mr-8">
              <img className="mr-3" src={SecuredIcon} alt="" />
              <p className="text-temp-green text-sm-15  font-serif">
                Secured plaform
              </p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <p className="text-sm pr-5">Powered by</p>
            <img className="mr-3" src={ReeddiLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
