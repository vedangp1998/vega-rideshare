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
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        mt: { xs: 0, sm: 0, md: 2 },
        mb: { xs: 3, sm: 4, md: 6 },
      }}
    >
      {/* Left Content Section */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: "16px",
            mt: { xs: 2, sm: 3, md: 4 },
            // mb: { xs: 3, sm: 4, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              fontWeight: 500,
              lineHeight: "24px",
              color: "#002652",
            }}
          >
            - The Most Reliable Taxi Booking App
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "34px", md: "38px", lg: "46px" },
              fontWeight: 700,
              lineHeight: { xs: "36px", sm: "44px", md: "50px", lg: "56px" },
              textAlign: { xs: "center", md: "left" },
              maxWidth: "660px",
            }}
          >
            <span style={{ color: "#FF8C00" }}>Welcome to Vega</span> <br />
            Where Drivers Keep 100% of the Fare
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              textAlign: { xs: "center", md: "left" },
              lineHeight: { xs: "18px", sm: "20px", md: "24px" },
              maxWidth: "445px",
            }}
          >
            A subscription-based model making rides cheaper for passengers and
            empowering drivers to earn more.
          </Typography>

          <Box
            component="img"
            src={DownloadButton}
            alt="download-btn"
            sx={{
              width: {
                xs: "150px",
                sm: "180px",
                md: "230px",
              },
              cursor: "pointer",
            }}
          />
        </Box>
      </Grid>

      {/* Right Image Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "100%", lg: "100%" },
            height: "auto",
            // mb: { xs: 6, sm: 0, md: 0 },
            display: "felx",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={CarIcon}
            style={{ width: "100%", height: "auto" }}
            alt="car-icon"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default WelcomePage;
