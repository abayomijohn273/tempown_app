import React from "react";
import { Link } from "react-router-dom";

import Item1Img from "../../assets/images/png/item/item1.png";

import User1Img from "../../assets/images/png/user/user1.png";

import StarImg from "../../assets/images/svg/star.svg";
import UnStarImg from "../../assets/images/svg/unstar.svg";

import PropTypes from "prop-types";

const ItemCard = ({ image, title, url }) => {
  return (
    <Link to={"/" + url}>
      <div className="card relative flex flex-col min-w-0 h-full w-full box-border rounded-lg bg-temp-green-100">
        <div className="card-header">
          <img src={image || Item1Img} className="w-full h-full" alt="" />
        </div>

        <div className="card-body text-temp-primary text-sm md:text-base font-bold flex-1 p-5 py-6">
          <p className="text-base text-temp-primary leading-7">{title}</p>
        </div>
        <div className="card-footer px-5 pb-5">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <img src={User1Img} className="mr-3" alt="" />
              <div className="flex flex-col">
                <p className="text-sm">Rex</p>
                <ul className="flex justify-start">
                  <li>
                    <img src={StarImg} width="100%" alt="" />
                  </li>
                  <li>
                    <img src={StarImg} width="100%" alt="" />
                  </li>
                  <li>
                    <img src={StarImg} width="100%" alt="" />
                  </li>
                  <li>
                    <img src={UnStarImg} width="100%" alt="" />
                  </li>
                  <li>
                    <img src={UnStarImg} width="100%" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <p className="price-tag text-temp-green rounded-lg font-bold text-xs py-2 px-3 bg-white">
                N120,000/day
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ItemCard;
