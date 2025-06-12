import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "./ui/Button";
import Logo from "../assets/Logo.svg";
import { useTranslation } from "react-i18next";
// import LanguageIcon from "@mui/icons-material/Language";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery("(max-width:899px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setOpen(open);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const navItems = [
    { label: t("aboutUs"), id: "about-us" },
    { label: t("howItWorks"), id: "how-it-works" },
    { label: t("riders"), id: "riders" },
    { label: t("driver"), id: "driver" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const elementTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      const elementHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition =
        elementTop - viewportHeight / 2 + elementHeight / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "12px 16px", sm: "15px 20px", md: "15px 30px" },
        borderBottom: "1px solid #E4E4E4",
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <img src={Logo} alt="Logo" style={{ maxHeight: "40px" }} />
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: { md: 2, lg: 6 },
        }}
      >
        {navItems.map((item, index) => (
          <Typography
            key={index}
            onClick={() => scrollToSection(item.id)}
            sx={{
              cursor: "pointer",
              color: "#111111",
              fontSize: { md: "16px", lg: "18px" },
              fontWeight: 500,
              lineHeight: "24px",
              transition: "color 0.3s ease",
              "&:hover": { color: "#555555" },
            }}
          >
            {item.label}
          </Typography>
        ))}
        <Button
          variant="contained"
          sx={{
            fontSize: { md: "14px", lg: "16px" },
            fontWeight: 500,
            minWidth: "auto",
            padding: "8px 16px",
            textTransform: "none",
            whiteSpace: "nowrap",
          }}
          onClick={() => scrollToSection("contact-us")}
        >
          {t("contactUs")}
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "20px",
            padding: "4px 10px",
            backgroundColor: "#f7f7f7",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          }}
        >
          {/* <LanguageIcon sx={{ fontSize: 20, mr: 1, color: "#111" }} /> */}

          <Select
            value={i18n.language}
            onChange={handleLanguageChange}
            variant="standard"
            disableUnderline
            input={<InputBase />}
            MenuProps={{
              PaperProps: {
                style: {
                  borderRadius: 12,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  marginTop: 8,
                },
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "right",
              },
            }}
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#111111",
              minWidth: "60px",
              "& .MuiSelect-select": {
                padding: "2px 6px",
              },
            }}
          >
            <MenuItem value="en">
              <Box component="span">EN</Box>
            </MenuItem>
            <MenuItem value="es">
              <Box component="span">ES</Box>
            </MenuItem>
          </Select>
        </Box>
      </Box>

      {isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "20px",
                padding: "4px 10px",
                backgroundColor: "#f7f7f7",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <Select
                value={i18n.language}
                onChange={handleLanguageChange}
                variant="standard"
                disableUnderline
                input={<InputBase />}
                MenuProps={{
                  PaperProps: {
                    style: {
                      borderRadius: 12,
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                      marginTop: 8,
                    },
                  },
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "right",
                  },
                }}
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#111111",
                  minWidth: "60px",
                  "& .MuiSelect-select": {
                    padding: "2px 6px",
                  },
                }}
              >
                <MenuItem value="en">
                  <Box component="span" ml={1}>
                    EN
                  </Box>
                </MenuItem>
                <MenuItem value="es">
                  <Box component="span" ml={1}>
                    ES
                  </Box>
                </MenuItem>
              </Select>
            </Box>
          )}

          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#111111" }}
            onClick={toggleDrawer(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: { xs: "80%", sm: "300px" },
                maxWidth: "300px",
                boxSizing: "border-box",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                position: "relative",
              }}
              role="presentation"
            >
              <IconButton
                onClick={toggleDrawer(false)}
                aria-label="Close menu"
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: 1,
                }}
              >
                <CloseIcon />
              </IconButton>

              <List sx={{ width: "100%", mt: "40px" }}>
                {navItems.map((item, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      py: 2,
                      borderRadius: "8px",
                      transition: "background-color 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      )}
    </Box>
  );
};

export default Header;
