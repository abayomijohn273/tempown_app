import React from "react";

const GetUpdateSection = () => {
  return (
    <div className="relative text-center py-10">
      <h3 className="font-serif text-3xl md:text-4xl text-temp-primary leading-7 pb-4">
        Get updates from TempOwn
      </h3>
      <p className="text-temp-secondary tracking-wide">
        Subscribe to our Newsletter to receive updates from us 📩
      </p>

      <form className="my-14">
        <div className="flex flex-wrap flex-1 justify-center">
          <input
            type="email"
            name="email"
            placeholder="Please enter your email"
            className="subscribe-form-input w-6/12 md:w-4/12 rounded-l-lg placeholder-temp-green-light text-xs sm:text-base  h-12 sm:h-12 md:h-16 lg:h-16 px-6 text-temp-secondary focus:outline-none"
          />
          <button className="bg-temp-green w-auto rounded-r-lg text-xs text-white font-bold sm:text-base h-12 sm:h-12 md:h-16 lg:h-16 px-6 focus:outline-none">
            Shoot me updates
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetUpdateSection;
