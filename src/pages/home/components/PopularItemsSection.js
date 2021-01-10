import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ItemCard from "../../../components/blocks/ItemCard";

import Item1Img from "../../../assets/images/png/item/item1.png";
import Item2Img from "../../../assets/images/png/item/item2.png";
import Item3Img from "../../../assets/images/png/item/item3.png";
import Item4Img from "../../../assets/images/png/item/item4.png";

const PopularItemsSection = () => {
  const items = [
    {
      id: "cat1",
      title: "Tesla XNS 2019",
      image: Item1Img,
      url: "",
    },
    {
      id: "cat2",
      title: "Tractor M120e",
      image: Item2Img,
      url: "",
    },
    {
      id: "cat3",
      title: "Nicon Camera",
      image: Item3Img,
      url: "",
    },
    {
      id: "cat4",
      title: "Tractor XD192",
      image: Item4Img,
      url: "",
    },
  ];
  return (
    <div className="py-10">
      <h3 className="font-serif text-2xl text-temp-green leading-7  pb-6">
        Popular Items
      </h3>
      <OwlCarousel
        className="owl-carousel owl-theme"
        items={4}
        loop={true}
        autoWidth={true}
        nav={false}
        dots={false}
        margin={35}
        stageClass="pt-5"
        rresponsiveClass={true}
        responsive={{
          0: {
            items: 2,
            nav: false,
          },
          600: {
            items: 3,
            nav: false,
          },
          1000: {
            items: 4,
            nav: true,
            loop: false,
          },
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="item relative mb-4">
            <ItemCard image={item.image} title={item.title} url={item.url} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default PopularItemsSection;
