"use client";

import Header from "@/components/Header";
import ScrollTopButton from "@/components/ScrollTopButton";
import Hero from "@/components/Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollTopButton />
      <Footer />
    </>
  );
};

export default Home;
