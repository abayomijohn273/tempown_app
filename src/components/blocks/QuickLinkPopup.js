import React from "react";
import { Link } from "react-router-dom";

const QuickLinkPopup = () => {
  return (
    <div className="box-border bg-temp-primary flex flex-row justify-between mx-auto h-auto w-full py-4 text-white px-4">
      <div className="flex-1 px-4 md:px-0">
        <p className=" md:text-center text-base font-sans font-light tracking-wide">
          Learn more about our{" "}
          <span>
            <Link className="text-temp-green-light" to="/policies">
              policies
            </Link>{" "}
          </span>{" "}
          and{" "}
          <span>
            <Link className="text-temp-green-light" to="/procedures">
              procedures
            </Link>{" "}
          </span>{" "}
          📃
        </p>
      </div>
      <div className="flex-shrink-0">
        <p className="text-temp-green-light md:pr-4">x</p>
      </div>
    </div>
  );
};

export default QuickLinkPopup;
