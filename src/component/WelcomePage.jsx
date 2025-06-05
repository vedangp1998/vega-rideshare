import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import DownloadButton from "../assets/Download-Appstore.svg";
import CarIcon from "../assets/CarIcon.png";

const WelcomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          textAlign: { xs: "center", md: "left" },
          px: { xs: 2, sm: 4, md: 6 },
          pt: { xs: 1, sm: 2, md: 4 },
          pb: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              gap: { xs: "12px", sm: "20px" },
              mt: { xs: 1, sm: 2, md: 0 },
              mb: { xs: 2, sm: 4, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontWeight: 500,
                lineHeight: "24px",
                color: "#002652",
              }}
            >
              The Most Reliable Taxi Booking App
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "36px", md: "40px", lg: "49px" },
                fontWeight: 700,
                lineHeight: { xs: "36px", sm: "46px", md: "54px" },
                maxWidth: "100%",
              }}
            >
              <span style={{ color: "#FF8C00" }}>Vega Ride Share</span>{" "}
              {isMobile ? "" : <br />}
              The Smarter Way to Ride!
            </Typography>

            <Box
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                maxWidth: { xs: "280px", sm: "350px", md: "400px" },
                textAlign: { xs: "center", md: "left" },
                my: { xs: 0.5, sm: 2 },
              }}
            >
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "4px", sm: "8px" },
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                <Box sx={{ fontSize: { xs: "16px", sm: "20px" } }}>
                  🚖 Affordable rides for passengers
                </Box>
                <Box sx={{ fontSize: { xs: "16px", sm: "20px" } }}>
                  💰 Higher earnings for drivers
                </Box>
                <Box sx={{ fontSize: { xs: "16px", sm: "20px" } }}>
                  📱 Fast & reliable booking
                </Box>
              </Typography>
            </Box>

            <Box
              sx={{
                cursor: "pointer",
                mt: { xs: 1, sm: 2 },
                width: { xs: "180px", sm: "220px", md: "250px" },
              }}
            >
              <img
                src={DownloadButton || "/placeholder.svg"}
                alt="Download from App Store"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: -1, sm: 0 },
            mb: { xs: -1, sm: 0 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "90%", sm: "85%", md: "100%" },
              height: "auto",
              display: "flex",
              justifyContent: "center",
              py: { xs: 0, sm: 2, md: 3 },
              mb: { xs: 0, sm: 2, md: 4 },
            }}
          >
            <img
              src={CarIcon || "/placeholder.svg"}
              alt="Taxi car illustration"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "600px",
                marginTop: isMobile ? "-10px" : "0",
                marginBottom: isMobile ? "-10px" : "0",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomePage;
