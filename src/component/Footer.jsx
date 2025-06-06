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

const sectionIds = {
  "About Us": "about-us",
  "How it works": "how-it-works",
  Riders: "riders",
  Drivers: "drivers",
  "Contact Us": "contact-us",
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const elementTop = section.getBoundingClientRect().top + window.pageYOffset;
    const elementHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollPosition = elementTop - viewportHeight / 2 + elementHeight / 2;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }
};

const Footer = () => {
  return (
    <Box sx={{ background: "#f5f2e8", marginTop: "80px" }}>
      {/* Top Section */}
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
              color: "#b36b00", // warm amber
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            Unlock Your Dream Ride: Your Taxi Booking Destination
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "40px" },
              color: "#1e1e1e",
              fontWeight: 700,
              lineHeight: "44px",
            }}
          >
            Download the App Now
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "20px" },
              color: "#3e3e3e",
              fontWeight: 500,
            }}
          >
            Vega is a ride-hailing company with a mission to empower drivers
            while <br />
            providing passengers with affordable and reliable rides.
          </Typography>
        </Box>
        <Box sx={{ cursor: "pointer" }}>
          <img src={DownloadButton} alt="download-btn" />
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{ bgcolor: "#eae5d8", color: "#1e1e1e", py: 4, textAlign: "left" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Column */}
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
                  <img src={Logo} alt="Logo" />
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#5a5242",
                    mb: 2,
                    maxWidth: 300,
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    lineHeight: { xs: "22px", sm: "24px", md: "26px" },
                  }}
                >
                  Vega Ride is built to empower both drivers and passengers. We
                  believe in making transportation effortless, cost-effective,
                  and rewarding for everyone.
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <IconButton
                    size="small"
                    sx={{ color: "#4b3f2f", p: 0.5, mr: 1 }}
                  >
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{ color: "#4b3f2f", p: 0.5, mr: 1 }}
                  >
                    <WhatsAppIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{ color: "#4b3f2f", p: 0.5, mr: 1 }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "#4b3f2f", p: 0.5 }}>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Grid>

            {/* Middle Column - Company */}
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
                  fontSize: "22px",
                  color: "#1e1e1e",
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
                {[
                  "About Us",
                  "How it works",
                  "Riders",
                  "Drivers",
                  "Contact Us",
                ].map((text) => (
                  <Link
                    key={text}
                    component="button"
                    underline="none"
                    sx={{
                      color: "#5a5242",
                      fontSize: "0.875rem",
                      cursor: "pointer",
                    }}
                    onClick={() => scrollToSection(sectionIds[text])}
                  >
                    {text}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Contact Column */}
            <Grid item xs={6} sm={3} md={2}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: "700",
                  fontSize: "22px",
                  color: "#1e1e1e",
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="body2" sx={{ color: "#5a5242" }}>
                  +1 (201) 256 59856
                </Typography>
                <Typography variant="body2" sx={{ color: "#5a5242" }}>
                  example@gmail.com
                </Typography>
                <Typography variant="body2" sx={{ color: "#5a5242" }}>
                  56, A highstreet, USA 56412
                </Typography>
              </Box>
            </Grid>

            {/* Newsletter Column */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: "700",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: "22px",
                  color: "#1e1e1e",
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
                      bgcolor: "#fff",
                      color: "#3e3e3e",
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
                    color: "#fff",
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

          {/* Bottom Row */}
          <Box
            sx={{
              mt: 4,
              pt: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center", sm: "center" },
              borderTop: "1px solid #c5c0b0",
            }}
          >
            <Typography variant="caption" sx={{ color: "#5a5242" }}>
              © 2025 <span style={{ color: "#1e1e1e" }}>VegaRide Share</span>.
              All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: { xs: 1, sm: 0 } }}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    sx={{ color: "#5a5242", fontSize: "0.75rem" }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
