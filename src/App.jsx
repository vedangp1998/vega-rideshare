import React from "react";
import "./App.css";
import Header from "./component/Header";
import WelcomePage from "./component/WelcomePage";
import { Box } from "@mui/material";
import AboutVega from "./component/AboutVega";
import WhatWePrioritize from "./component/WhatWePrioritize";
import HowItWorks from "./component/HowItWorks";
import Pricing from "./component/Pricing";
import Customer from "./component/Customer";
import Footer from "./component/Footer";
import NewBenefits from "./component/New Pages/Benefits";
import CommentSection from "./component/New Pages/CommentSection";
// import SafetySection from "./component/New Pages/Safety";
// import NewAboutPage from "./component/New Pages/About";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ marginInline: "2rem" }}>
        <WelcomePage />
        <AboutVega />
        {/* <NewAboutPage /> */}
        <WhatWePrioritize />
        <NewBenefits />
        {/* <SafetySection /> */}
        <HowItWorks />
        <Pricing />
        <Customer />
        <CommentSection />
      </Box>
      <Footer />
    </>
  );
}

export default App;
