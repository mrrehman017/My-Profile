import React from "react";
import Intro from "../Component/Intro";
import IntroDetails from "../Component/IntroDetails";
// import Footer from "../Component/Footer";s

const Home = () => {
  return (
    <>
      <section id="home-page-bg">
        <Intro />
        <IntroDetails />
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
