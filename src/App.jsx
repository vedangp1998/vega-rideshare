import "./App.css";
import Header from "./component/Header";
import React from "react";
import WelcomePage from "./component/WelcomePage";
import { Box } from "@mui/material";
import AboutVega from "./component/AboutVega";
import BookingProcess from "./component/BookingProcess";
import Pricing from "./component/Pricing";
import Customer from "./component/Customer";
import Footer from "./component/Footer";
import Benefits from "./component/Benefits";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ marginInline: "2rem" }}>
        <WelcomePage />
        <AboutVega />
        <Benefits />
        <BookingProcess />
        <Pricing />
        <Customer />
      </Box>
      <Footer />
    </>
  );
}

export default App;
