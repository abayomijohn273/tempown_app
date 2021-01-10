import React from "react";
import MainContainer from "../../components/layout/MainContainer";
import BrowseCategoriesSection from "./components/BrowseCategoriesSection";
import GetUpdateSection from "./components/GetUpdateSection";
import HowItWorkSection from "./components/HowItWorkSection";
import PopularItemsSection from "./components/PopularItemsSection";
import RecommendedSection from "./components/RecommendedSection";
import TestimonialSection from "./components/TestimonialSection";
import TopSection from "./components/TopSection";
import WhyTempOwnSection from "./components/WhyTempOwnSection";

const Home = () => {
  return (
    <MainContainer>
      <TopSection />

      <BrowseCategoriesSection />

      <PopularItemsSection />

      <RecommendedSection />

      <WhyTempOwnSection />

      <HowItWorkSection />

      <TestimonialSection />

      <GetUpdateSection />
    </MainContainer>
  );
};

export default Home;
