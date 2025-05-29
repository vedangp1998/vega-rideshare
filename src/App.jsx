import "./App.css";
import Header from "./component/Header";
import React from "react";
import WelcomePage from "./component/WelcomePage";
import { Box } from "@mui/material";
import AboutVega from "./component/AboutVega";
import Benefits from "./component/Benefits";
import BookingProcess from "./component/BookingProcess";
import Pricing from "./component/Pricing";
import Customer from "./component/Customer";
import Footer from "./component/Footer";
import NewAboutPage from "./component/New Pages/About";
import NewBenefits from "./component/New Pages/Benefits";
import SafetySection from "./component/New Pages/Safety";
import CommentSection from "./component/New Pages/CommentSection";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ marginInline: "2rem" }}>
        <WelcomePage />
        <AboutVega />
        <NewAboutPage />
        <Benefits />
        <NewBenefits />
        <SafetySection />
        <BookingProcess />
        <Pricing />
        <Customer />
        <CommentSection />
      </Box>
      <Footer />
    </>
  );
}

export default App;
