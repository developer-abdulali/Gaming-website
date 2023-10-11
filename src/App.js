import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import PlayNowComp from "./components/PlayNowComp/PlayNow";
import GamingWorld from "./components/GamingWorld/GamingWorld";
import HappyClients from "./components/HappyClients/HappyClients";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <PlayNowComp />
      <GamingWorld />
      <HappyClients />
      <Footer />
    </Router>
  );
};

export default App;
