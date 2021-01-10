import React from "react";
import { Helmet } from "react-helmet";
import QuickLinkPopup from "../blocks/QuickLinkPopup";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Container from "../blocks/Container";
import Header from "./Header";

const MainContainer = (props) => {
  return (
    <>
      <Helmet>
        <title>TempOwn | {props.pageTitle || "Welcome"}</title>
      </Helmet>

      <QuickLinkPopup />

      <Container>
        <>
          <Header />
          <main>{props.children}</main>

          <Footer />
        </>
      </Container>
    </>
  );
};

MainContainer.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default MainContainer;
