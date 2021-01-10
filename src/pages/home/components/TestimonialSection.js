import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialImg1 from "../../../assets/images/png/testimonials/1.png";
const TestimonialSection = () => {
  return (
    <div className="relative pt-14 pb-20">
      <div className="flex flex-wrap flex-row">
        <div className="testimonial-image-bg rounded-t-lg lg:rounded-t-none lg:rounded-l-lg text-center w-full lg:w-6/12">
          <OwlCarousel
            className="owl-carousel owl-theme template-slider-image"
            items={1}
            loop={true}
            nav={false}
            dots={false}
            autoplay={true}
          >
            <div className="">
              <img
                src={TestimonialImg1}
                width="50%"
                className="mx-auto relative bottom-0"
                alt=""
              />
            </div>
            <div className="">
              <img
                src={TestimonialImg1}
                width="50%"
                className="mx-auto relative bottom-0"
                alt=""
              />
            </div>
            <div className="">
              <img
                src={TestimonialImg1}
                width="50%"
                className="mx-auto relative bottom-0"
                alt=""
              />
            </div>
          </OwlCarousel>
        </div>
        <div className="testimonial-text-bg rounded-b-lg lg:rounded-b-none lg:rounded-r-lg py-12 px-10 sm:px-12 md:px-14 lg:px-16 w-full lg:w-6/12">
          <OwlCarousel
            className="owl-carousel owl-theme testimonial-slider"
            items={1}
            loop={true}
            nav={false}
            dots={true}
            autoplay={true}
          >
            <div className="item ">
              <p className="text-xl text-temp-white font-serif leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vestibulum felis sed risus cursus efficitur. Pellentesque sed
                dui a diam malesuada dictum. Ut volutpat eget ipsum id iaculis.
                In vel lacus eget velit semper tempor. Aliquam lacinia, tortor
                et condimentum varius, libero dolor tincidunt turpis, non auctor
                nisi enim non enim.
              </p>
              <p className="font-sans text-xl font-bold testimonial-name pt-8">
                Elizabeth
              </p>
              <p className="text-white font-light text-sm-15">
                Founder, Reedi International
              </p>
            </div>
            <div className="item ">
              <p className="text-xl text-temp-white font-serif leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vestibulum felis sed risus cursus efficitur. Pellentesque sed
                dui a diam malesuada dictum. Ut volutpat eget ipsum id iaculis.
                In vel lacus eget velit semper tempor. Aliquam lacinia, tortor
                et condimentum varius, libero dolor tincidunt turpis, non auctor
                nisi enim non enim.
              </p>
              <p className="font-sans text-xl font-bold testimonial-name pt-8">
                Elizabeth
              </p>
              <p className="text-white font-light text-sm-15">
                Founder, Reedi International
              </p>
            </div>
            <div className="item ">
              <p className="text-xl text-temp-white font-serif leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vestibulum felis sed risus cursus efficitur. Pellentesque sed
                dui a diam malesuada dictum. Ut volutpat eget ipsum id iaculis.
                In vel lacus eget velit semper tempor. Aliquam lacinia, tortor
                et condimentum varius, libero dolor tincidunt turpis, non auctor
                nisi enim non enim.
              </p>
              <p className="font-sans text-xl font-bold testimonial-name pt-8">
                Elizabeth
              </p>
              <p className="text-white font-light text-sm-15">
                Founder, Reedi International
              </p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
