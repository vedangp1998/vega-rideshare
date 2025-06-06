import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Button from "./ui/Button";
import MobileImage from "../assets/Mobileonhand.svg";
import CheckIcon from "@mui/icons-material/Check";

// const features = [
//   "Affordable Rides – Transparent pricing with no hidden fees.",
//   "Driver Empowerment – Keep 100% of your earnings, no commissions.",
//   "Seamless Experience – Fast, reliable, and hassle-free booking.",
// ];

const stats = [
  { number: "50+", label: "Rides" },
  { number: "500K+", label: "Happy Riders" },
  { number: "25K+", label: "Dedicated Drivers" },
  { number: "5M+", label: "Rides Completed" },
];

const AboutVega = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          background: "#EDECE3",
          borderRadius: "34px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "auto",
          p: { xs: 3, sm: 4, md: 8, lg: 8 }, // reduced mobile padding only
          marginY: { xs: "50px" },
        }}
        id="about-us"
      >
        {/* Left Side Image */}
        <Box
          component="img"
          src={MobileImage}
          alt="Vega App"
          sx={{
            position: "absolute",
            top: { xs: "93%", sm: "93%", md: "42%", lg: "30%" },
            left: { xs: "76%", sm: "80%", md: 0 },
            transform: "translateY(-50%)",
            width: { xs: "110px", sm: "180px", md: "480px", lg: "530px" },
            height: "auto",
            objectFit: "contain",
          }}
        />

        {/* Right Side Content */}
        {/* <Box
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

        <Button variant="contained" sx={{ width: "106px" }}>
          More
        </Button>
      </Box> */}

        <Box
          sx={{
            flex: "0 0 auto",
            width: { xs: "100%", md: "50%" },
            pr: { md: 3 },
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.75rem" },
              fontWeight: "bold",
              mb: 3,
              color: "#212529",
              lineHeight: 1.2,
            }}
          >
            About{" "}
            <Box component="span" sx={{ color: "#FF8C00" }}>
              VEGA
            </Box>{" "}
            Rideshare
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              lineHeight: 1.7,
              color: "#495057",
              fontSize: { xs: "0.95rem", md: "1rem" },
              maxWidth: { xs: "90%", sm: "100%" },
            }}
          >
            VEGA Rideshare was founded in 2023 with a simple mission: create a
            transportation platform that truly works for both drivers and
            riders. We believe the rideshare industry needed a fresh approach.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              lineHeight: 1.7,
              color: "#495057",
              fontSize: { xs: "0.95rem", md: "1rem" },
              maxWidth: { xs: "90%", sm: "100%" },
            }}
          >
            Our innovative subscription model for drivers ensures they keep 100%
            of their ride fares, while our efficient operations allow us to
            offer riders the best prices in the market. It's a win-win approach
            that's transforming urban transportation.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              lineHeight: 1.7,
              color: "#495057",
              fontSize: { xs: "0.95rem", md: "1rem" },
              maxWidth: { xs: "90%", sm: "100%" },
            }}
          >
            Today, VEGA operates in over 50 cities nationwide and continues to
            expand rapidly as more drivers and riders discover the VEGA
            difference. We're not just another rideshare company – we're
            building the future of transportation.
          </Typography>

          {/* <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 4,
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
            width: "100%",
            maxWidth: { xs: "320px", sm: "100%" },
          }}
        >
          {stats.map((stat, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                flex: { xs: "1 1 calc(50% - 8px)", sm: "1" },
                p: { xs: 1.5, md: 2 },
                textAlign: "center",
                backgroundColor: "#ffffff",
                border: "1px solid #e9ecef",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                borderRadius: "8px",
                minWidth: { xs: "140px", sm: "auto" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#FF8C00",
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.75rem" },
                  lineHeight: 1.1,
                  mb: 0.5,
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#6c757d",
                  fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.813rem" },
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </Typography>
            </Paper>
          ))}
        </Box> */}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF8C00",
              color: "white",
              px: { xs: 3, md: 4 },
              py: { xs: 1.2, md: 1.5 },
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: "#FF9E20",
                boxShadow: "0 0 10px rgba(255, 140, 0, 0.5)",
              },
            }}
          >
            Join Our Mission
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
          mt: 10,
          mb: 4,
          width: "100%",
          maxWidth: { xs: "320px", sm: "100%" },
          mx: "auto",
        }}
      >
        {stats.map((stat, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              flex: { xs: "1 1 calc(50% - 8px)", sm: "1" },
              p: { xs: 1.5, md: 2 },
              backgroundColor: "#ffffff",
              border: "1px solid #e9ecef",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
              minWidth: { xs: "140px", sm: "auto" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#FF8C00",
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.75rem" },
                lineHeight: 1.1,
                mb: 0.5,
              }}
            >
              {stat.number}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#6c757d",
                fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.813rem" },
                fontWeight: 500,
              }}
            >
              {stat.label}
            </Typography>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default AboutVega;
