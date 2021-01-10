import React from "react";
import HighlistItem from "../../../components/blocks/HighlistItem";

const HowItWorkSection = () => {
  return (
    <div className="relative py-16">
      <div className=" py-16 md:py-20  w-80 md:w-60">
        <h3 className="font-serif  text-3xl text-temp-primary leading-7  pb-8">
          How it works
        </h3>
        <p className="font-sans text-temp-primary ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean blandit
          enim vel lacus.
        </p>
      </div>

      <div className=" ">
        <div className="flex flex-wrap justify-start md:justify-between">
          <div className="flex-grow-1"></div>
          <div className="w-10/12 md:w-6/12">
            <HighlistItem
              title="Create an account"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum felis sed risus cursus efficitur. Pellentesque sed dui a diam malesuada dictum. Ut volutpat eget ipsum id iaculis."
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap justify-start md:justify-between">
          <div className="w-11/12 md:w-6/12">
            <HighlistItem
              title="Create an account"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum felis sed risus cursus efficitur. Pellentesque sed dui a diam malesuada dictum. Ut volutpat eget ipsum id iaculis."
            />
          </div>
          <div className="flex-grow-1"></div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap justify-start md:justify-between">
          <div className="flex-grow-1"></div>
          <div className="w-11/12 md:w-6/12">
            <HighlistItem
              title="Create an account"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum felis sed risus cursus efficitur. Pellentesque sed dui a diam malesuada dictum. Ut volutpat eget ipsum id iaculis."
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap justify-start md:justify-between">
          <div className="w-11/12 md:w-6/12">
            <HighlistItem
              title="Create an account"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum felis sed risus cursus efficitur. Pellentesque sed dui a diam malesuada dictum. Ut volutpat eget ipsum id iaculis."
            />
          </div>
          <div className="flex-grow-1"></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorkSection;
