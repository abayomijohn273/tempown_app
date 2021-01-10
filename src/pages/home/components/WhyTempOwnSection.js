import React from "react";
import HighlistItem from "../../../components/blocks/HighlistItem";

import CapsulesImg from "../../../assets/images/png/capsule.png";
import DroneImg from "../../../assets/images/png/device.png";
import CameraImg from "../../../assets/images/png/camera.png";

import ManImg from "../../../assets/images/png/man.png";

const WhyTempOwnSection = () => {
  return (
    <div className="flex flex-wrap flex-row justify-start md:justify-between pt-24 pb-2">
      <div className="flex w-full lg:w-5/12 pb-6">
        <div
          className="flex items-end relative px-10 rounded-lg justify-center"
          style={{ backgroundColor: "#F8F045" }}
        >
          <img src={ManImg} alt="" />
          <img
            className="absolute top-0 -mt-14 left-5"
            src={CapsulesImg}
            width="100rem"
            alt=""
          />
          <div className="flex camera-bg absolute -bottom-12 left-44 rounded-lg bg-white items-center justify-center p-4 py-5">
            <img className="object-contain" src={CameraImg} alt="" />
          </div>
          <div className="drone-card hidden sm:block sm:w-5/12 md:w-7/12 absolute top-16 left-80 overflow-hidden rounded-lg ">
            <div className="flex w-full justify-center items-center my-6 drone-holder">
              <img src={DroneImg} alt="" />
            </div>
            <div className="bg-white">
              <span className="flex flex-no-wrap items-center justify-between px-3 pt-3">
                <p className="text-xs font-bold text-temp-primary">Drone</p>
                <p className="text-xs flex items-center">
                  <svg
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="2" r="2" fill="#2FB723" />
                  </svg>
                  <span className="ml-1 drone-card-text-smallest">
                    Available
                  </span>
                </p>
              </span>
              <p className="drone-card-text-smallest text-temp-primary p-3">
                A drone, in technological terms, is an unmanned aircraft. Drones
                are more formally known as unmanned aerial vehicles (UAVs) or
                unmanned aircraft systems (UASes).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 w-11/12 md:w-5/12 lg:w-5/12 pb-6">
        <h3 className="font-serif text-3xl text-temp-primary leading-7  pb-14">
          Why TempOwn?
        </h3>

        <HighlistItem
          title="Lower upfront cost"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean blandit enim vel lacus."
        />
        <HighlistItem
          title="Flexibility"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean blandit enim vel lacus."
        />
        <HighlistItem
          title="Access to latest technologies "
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean blandit enim vel lacus."
        />
      </div>
    </div>
  );
};

export default WhyTempOwnSection;
