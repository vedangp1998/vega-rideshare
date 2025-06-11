import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import DownloadButton from "../assets/Download-Appstore.svg";
import CarIcon from "../assets/CarIcon.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
              gap: isMobile ? "12px" : "20px",
              marginTop: isMobile ? "8px" : "0px",
              marginBottom: isMobile ? "16px" : "0px",
            }}
          >
            <motion.div variants={fadeUp}>
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
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
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
            </motion.div>

            <motion.div variants={fadeUp} custom={2}>
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
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={3}
              style={{
                cursor: "pointer",
                marginTop: isMobile ? "8px" : "16px",
                width: isMobile ? "180px" : "250px",
              }}
            >
              <img
                src={DownloadButton || "/placeholder.svg"}
                alt="Download from App Store"
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              maxWidth: isMobile ? "90%" : "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              paddingTop: isMobile ? "0px" : "16px",
              marginBottom: isMobile ? "0px" : "32px",
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
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomePage;
