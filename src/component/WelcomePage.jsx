import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import DownloadButton from "../assets/Download-Appstore.svg";
import CarIcon from "../assets/CarIcon.png";

const WelcomePage = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        textAlign: { xs: "center", md: "left" },
        px: { xs: 2, sm: 4, md: 6 },
        mt: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Left Content Section */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: "20px",
            mt: { xs: 2, sm: 4, md: 0 },
            mb: { xs: 2, sm: 4, md: 12 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px" },
              fontWeight: 500,
              lineHeight: "24px",
              color: "#002652",
            }}
          >
            -The Most Reliable Taxi Booking App
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "40px", lg: "49px" },
              fontWeight: 700,
              lineHeight: { xs: "40px", sm: "50px", md: "54px" },
            }}
          >
            <span style={{ color: "#FF8C00" }}>Vega Ride Share</span> <br />
            The Smarter Way to Ride!
          </Typography>

          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
            🚖 Affordable rides for passengers <br /> 💰 Higher earnings for
            drivers <br /> 📱 Fast & reliable booking
          </Typography>
          <Box sx={{ cursor: "pointer" }}>
            <img
              src={DownloadButton}
              alt="download-btn"
              style={{ width: "100%", maxWidth: "250px" }}
            />
          </Box>
        </Box>
      </Grid>

      {/* Right Image Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", mt: { xs: 0, sm: 0 } }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "780px", md: "800px", lg: "800px" },
            height: "auto",
            mb: 14,
          }}
        >
          <img src={CarIcon} style={{ width: "100%", height: "auto" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
