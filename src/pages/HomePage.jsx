import React from "react";
import { useRef } from "react";
import image from "../assets/ladyimage.png";
import { ArrowRight, Contact } from "lucide-react";
import Categories from "../Components/Categories";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import Heropage from "../pages/Heropage";

import Sellpage from "./Sellpage";
import CustomerReviews from "./customerReview";
import ChooseUspage from "./chooseuspage";
import { Fade } from "react-awesome-reveal";

const HomePage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const categoriesref = useRef(null);
  const sellRef = useRef(null);
  const homeRef = useRef(null);
  const chooseUsRef = useRef(null);
  // Scroll to Categories, About, and Contact functions
  // This function scrolls to the top of the page
  // This function scrolls to the categories section
  // This function scrolls to the about section
  // This function scrolls to the contact section
  // This function scrolls to the top of the page

  
  const scrollToCategories = () => {
    categoriesref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSell = () => {
    sellRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Fade direction="down" duration={500} triggerOnce>
        <Navbar />
      </Fade>
      
      <div ref={homeRef} id="home">
        <Heropage />
      </div>
      <div ref={categoriesref} id="categories">
        <Categories />
        <div ref={sellRef} id="sell">
          <Sellpage />
        </div>
      </div>

      <div ref={aboutRef} id="about">
        <AboutPage />
      </div>
      <div ref={chooseUsRef} id="chooseus">
        <ChooseUspage />
      </div>

      <CustomerReviews />
      <div ref={contactRef} id="contact">
        <ContactPage />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
