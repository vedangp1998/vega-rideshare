import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Button from "./ui/Button";
import MobileImage from "../assets/Mobileonhand.svg";
import CheckIcon from "@mui/icons-material/Check";

const features = [
  "Affordable Rides – Transparent pricing with no hidden fees.",
  "Driver Empowerment – Keep 100% of your earnings, no commissions.",
  "Seamless Experience – Fast, reliable, and hassle-free booking.",
];

const AboutVega = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        background: "#EDECE3",
        borderRadius: "34px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        // minHeight: "529px",
        height: "auto",
        p: { xs: 6, md: 8, lg: 8 },
      }}
    >
      {/* Left Side Image */}
      <Box
        component="img"
        src={MobileImage}
        alt="Vega App"
        sx={{
          position: "absolute",
          top: { xs: "87%", sm: "65%", md: "42%", lg: "30%" },
          left: { xs: "62%", sm: "80%", md: 0 },
          transform: "translateY(-50%)",
          width: { xs: "150px", sm: "180px", md: "480px", lg: "530px" },
          height: "auto",
          objectFit: "contain",
        }}
      />

      {/* Right Side Content */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          gap: "20px",
          pr: { xs: 2, md: 6 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "34px", lg: "40px" },
            fontWeight: 700,
            lineHeight: "44px",
            letterSpacing: "none",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
              lg: "left",
            },
          }}
        >
          About Vega Ride Share
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "18px", lg: "20px" },
            fontWeight: 500,
            lineHeight: "24px",
            textAlign: { xs: "center", sm: "left", md: "left" },
            letterSpacing: "none",
          }}
        >
          Vega Ride Share is redefining ride-hailing with a driver-first
          approach and affordable rides for all.
        </Typography>

        {/* Features List */}
        <Box>
          {features.map((text, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "#FF8C00",
                  color: "white",
                  width: "32px",
                  height: "32px",
                  p: 1,
                  mr: 1,
                }}
              >
                <CheckIcon sx={{ fontSize: "18px" }} />
              </Box>

              <Typography
                sx={{
                  color: "rgba(17, 17, 17, 0.6)",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "26px",
                  width: "100%",
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* More Button */}
        <Button variant="contained" sx={{ width: "106px" }}>
          More
        </Button>
      </Box>
    </Box>
  );
};

export default AboutVega;
