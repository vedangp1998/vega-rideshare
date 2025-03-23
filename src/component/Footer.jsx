import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import DownloadButton from "../assets/Download-Appstore.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#111111",
        marginTop: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 4,
          padding: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              color: "#FF8C00",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            Unlock Your Dream Ride: Your Taxi Booking Destination
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "32px", md: "40px" },
              color: "#FFFFFF",
              fontWeight: 700,
              lineHeight: "44px",
            }}
          >
            Download the App Now
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "18px", md: "20px" },
              color: "#FFFFFF",
              fontWeight: 500,
              maxWidth: "690px",
              width: "auto",
            }}
          >
            Vega is a ride-hailing company with a mission to empower drivers
            while providing passengers with affordable and reliable rides.
          </Typography>
        </Box>
        <Box
          sx={{
            cursor: "pointer",
            width: {
              xs: "150px",
              sm: "180px",
              md: "230px",
            },
          }}
        >
          <img src={DownloadButton} alt="download-btn" />
        </Box>
      </Box>

      <Box
        sx={{ bgcolor: "#ffffff", color: "#111111", py: 4, textAlign: "left" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Column - Logo and Description */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Box sx={{ mb: 2 }}>
                  <img src={Logo} />
                </Box>

                <Typography variant="body2" sx={{ mb: 2, maxWidth: 300 }}>
                  Vega is a ride-hailing company with a mission to empower
                  drivers while providing passengers with affordable 111
                  reliable rides.
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <IconButton
                    size="small"
                    sx={{ color: "#111111", p: 0.5, mr: 1 }}
                  >
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{ color: "#111111", p: 0.5, mr: 1 }}
                  >
                    <WhatsAppIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{ color: "#111111", p: 0.5, mr: 1 }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "#111111", p: 0.5 }}>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Grid>

            {/* Middle Column - Company Links */}
            <Grid
              item
              xs={6}
              sm={3}
              md={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "left", md: "left" },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: "700",
                  textAlign: "left",
                  fontSize: "22px",
                }}
              >
                Company
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  alignItems: { xs: "left", md: "flex-start" },
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{ color: "#111", fontSize: "0.875rem" }}
                >
                  Features
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{ color: "#111", fontSize: "0.875rem" }}
                >
                  How it Works
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{ color: "#111", fontSize: "0.875rem" }}
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{ color: "#111", fontSize: "0.875rem" }}
                >
                  For Driver
                </Link>
                <Link
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{ color: "#111", fontSize: "0.875rem" }}
                >
                  For Driver
                </Link>
              </Box>
            </Grid>

            {/* Middle Column - Contact Info */}
            <Grid item xs={6} sm={3} md={2}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: "700",
                  textAlign: "left",
                  fontSize: "22px",
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="body2" sx={{ color: "#111" }}>
                  +1 (201) 256 59856
                </Typography>
                <Typography variant="body2" sx={{ color: "#111" }}>
                  example@gmail.com
                </Typography>
                <Typography variant="body2" sx={{ color: "#111" }}>
                  56, A highstreet, USA 56412
                </Typography>
              </Box>
            </Grid>

            {/* Right Column - Newsletter */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: "700",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: "22px",
                }}
              >
                Get Latest Information
              </Typography>
              <Box sx={{ display: "flex", mb: 2 }}>
                <TextField
                  placeholder="email address"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    sx: {
                      bgcolor: "#F2EAEA",
                      color: "#111",
                      borderRadius: "8px 23px 23px 8px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      height: "46px",
                    },
                  }}
                />
                <Button
                  sx={{
                    bgcolor: "#002652",
                    color: "white",
                    ml: "-85px",
                    borderRadius: "30px",
                    textTransform: "none",
                    height: "40px",
                    minWidth: "80px",
                    mt: "3px",
                  }}
                >
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Row - Copyright and Policies */}
          <Box
            sx={{
              mt: 4,
              pt: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", sm: "center" },
              borderTop: "1px solid #2F2F2F",
            }}
          >
            <Typography variant="caption" sx={{ color: "#111" }}>
              © 2025{" "}
              <span style={{ color: "#111", fontWeight: "bold" }}>
                VegaRide Share
              </span>
              . All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: { xs: 1, sm: 0 } }}>
              <Link
                href="#"
                underline="none"
                color="inherit"
                sx={{ color: "#111", fontSize: "0.75rem" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                underline="none"
                color="inherit"
                sx={{ color: "#111", fontSize: "0.75rem" }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                underline="none"
                color="inherit"
                sx={{ color: "#111", fontSize: "0.75rem" }}
              >
                Cookie Policy
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
