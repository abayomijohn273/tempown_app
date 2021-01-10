import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Cat1Img from "../../assets/images/png/category/1.png";

const CategoryCard = ({ image, title, url }) => {
  return (
    <Link to={"/" + url}>
      <div className="browse-card flex items-center flex-nowrap pl-3 pr-6 py-2 bg-white h-16 w-full box-border">
        <p>
          <img
            src={image || Cat1Img}
            className="rounded-full w-full h-full"
            alt=""
          />
        </p>

        <p className="text-temp-primary text-sm md:text-base font-bold flex-1 pl-5">
          {title}
        </p>
      </div>
    </Link>
  );
};

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CategoryCard;
