import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CategoryCard from "../../../components/blocks/CategoryCard";

import Cat1Img from "../../../assets/images/png/category/1.png";

const BrowseCategoriesSection = () => {
  const categories = [
    {
      id: "cat1",
      title: "Construction Machinery & Equipment",
      image: Cat1Img,
      url: "",
    },
    {
      id: "cat2",
      title: "Media Equipments",
      image: Cat1Img,
      url: "",
    },
    {
      id: "cat3",
      title: "Energy Systems",
      image: Cat1Img,
      url: "",
    },
    {
      id: "cat4",
      title: "General Equipments",
      image: Cat1Img,
      url: "",
    },
  ];
  return (
    <div className="py-10">
      <h3 className="font-serif text-2xl text-temp-green leading-7  pb-6">
        Browse by Categories
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
        {categories.map((cat) => (
          <div key={cat.id} className="item relative mb-4">
            <CategoryCard image={cat.image} title={cat.title} url={cat.url} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default BrowseCategoriesSection;
