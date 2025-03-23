import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Button from "./ui/Button";
import MobileImage from "../assets/Mobileonhand.svg";
import CheckIcon from "@mui/icons-material/Check";

const features = [
  "Vega is a ride-hailing company with a mission to empower",
  "Vega is a ride-hailing company with a mission to empower",
  "Vega is a ride-hailing company with a mission to empower",
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
        p: { lg: 8, md: 6, sm: 6, xs: 3 },
      }}
    >
      {/* Left Side Image */}
      <Box
        component="img"
        src={MobileImage}
        alt="Vega App"
        sx={{
          position: "absolute",
          top: { xs: "88%", sm: "73%", md: "32%", lg: "33%" },
          left: { xs: "55%", sm: "75%", md: 0 },
          transform: "translateY(-50%)",
          width: { xs: "153px", sm: "180px", md: "480px", lg: "530px" },
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
          textAlign: { lg: "left", md: "left", xs: "left" },
          gap: "20px",
          pr: { xs: 2, md: 6 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "34px", lg: "40px" },
            fontWeight: 700,
            lineHeight: { xs: "32px", md: "40px", lg: "44px" },
            textAlign: { lg: "left", md: "left", xs: "center", sm: "left" },
            width: "100%",
          }}
        >
          About Our Vega App
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "15px", md: "16px", lg: "20px" },
            fontWeight: 500,
            lineHeight: "24px",
            width: "100%",
            textAlign: { lg: "left", md: "left", xs: "center", sm: "left" },
          }}
        >
          Vega is a ride-hailing company with a mission to empower drivers while
          providing passengers with affordable and reliable rides.
        </Typography>

        {/* Features List */}
        <Box>
          {features.map((text, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "#FF8C00",
                  color: "white",
                  width: { lg: "32px", xs: "25px" },
                  height: { lg: "32px", xs: "25px" }, // Ensure proportional size
                  p: 1,
                  mr: 1,
                }}
              >
                <CheckIcon
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "18px",
                    }, // Adjust for mobile
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: "rgba(17, 17, 17, 0.6)",
                  fontSize: { md: "16px", sm: "16px", lg: "20px" },
                  fontWeight: 500,
                  lineHeight: "24px",
                  maxWidth: "530px",
                  width: "auto",
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
