import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Link,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../assets/Logo.svg";
import AppStoreButton from "../assets/Download-Appstore.svg";
import PlayStoreButton from "../assets/PlayStoreBadge.png";
import { useTranslation } from "react-i18next";

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
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { t } = useTranslation();

  const handleComingSoonClick = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ background: "#f5f2e8", marginTop: "80px", maxWidth: "100%" }}>
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
              color: "#b36b00",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            {t("footer.unlockRide")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "40px" },
              color: "#1e1e1e",
              fontWeight: 700,
              lineHeight: "44px",
            }}
          >
            {t("footer.downloadApp")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "20px" },
              color: "#3e3e3e",
              fontWeight: 500,
            }}
          >
            {t("footer.missionLine1")}
            <br />
            {t("footer.missionLine2")}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            component="a"
            href="#"
            onClick={handleComingSoonClick}
            sx={{ cursor: "pointer" }}
          >
            <img
              src={AppStoreButton}
              alt={t("footer.downloadOnAppStore")}
              style={{ width: "200px", height: "65px", objectFit: "contain" }}
            />
          </Box>

          <Box
            component="a"
            href="#"
            onClick={handleComingSoonClick}
            sx={{ cursor: "pointer" }}
          >
            <img
              src={PlayStoreButton}
              alt={t("footer.getItOnGooglePlay")}
              style={{ width: "200px", height: "65px", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          {t("footer.comingSoon")}
        </Alert>
      </Snackbar>

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
                  {t("footer.about")}
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

            {/* Middle Column */}
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
                {t("footer.company")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  alignItems: { xs: "left", md: "flex-start" },
                }}
              >
                {Object.keys(sectionIds).map((text) => (
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
                    {t(`footer.sections.${text}`)}
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
                {t("footer.contact")}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="body2" sx={{ color: "#5a5242" }}>
                  +1 (201) 256 59856
                </Typography>
                <Typography variant="body2" sx={{ color: "#5a5242" }}>
                  support@vegacab.com
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
                {t("footer.getLatest")}
              </Typography>
              <Box sx={{ display: "flex", mb: 2 }}>
                <TextField
                  placeholder={t("footer.emailPlaceholder")}
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
                  {t("footer.send")}
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
              © 2025 <span style={{ color: "#1e1e1e" }}>VegaRide Share</span>.{" "}
              {t("footer.rights")}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: { xs: 1, sm: 0 } }}>
              {["privacy", "terms", "cookies"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{ color: "#5a5242", fontSize: "0.75rem" }}
                >
                  {t(`footer.${item}`)}
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
