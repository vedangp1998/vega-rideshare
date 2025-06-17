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
import LanguageIcon from "@mui/icons-material/Language";
import Button from "./ui/Button";
import Logo from "../assets/Logo.svg";
import { useTranslation } from "react-i18next";
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
          className="relative flex items-center rounded-full bg-transparent hover:bg-gray-100 transition-all duration-300"
          sx={{
            border: "1px solid #E4E4E4",
            padding: { xs: "4px 8px", sm: "6px 12px" },
          }}
        >
          <LanguageIcon sx={{ fontSize: { xs: 18, sm: 20 }, mr: 1, color: "#111111" }} />
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
                  backgroundColor: "#ffffff",
                  minWidth: "100px",
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
              fontSize: { xs: "13px", sm: "14px" },
              fontWeight: 500,
              color: "#111111",
              minWidth: { xs: "50px", sm: "60px" },
              "& .MuiSelect-select": {
                padding: { xs: "2px 4px", sm: "2px 6px" },
              },
              "&:hover": {
                color: "#333333",
              },
            }}
          >
            <MenuItem value="en">
              <Box component="span" className="font-medium">EN</Box>
            </MenuItem>
            <MenuItem value="es">
              <Box component="span" className="font-medium">ES</Box>
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
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Box
            className="relative flex items-center rounded-full bg-transparent hover:bg-gray-100 transition-all duration-300"
            sx={{
              border: "1px solid #E4E4E4",
              padding: { xs: "3px 6px", sm: "4px 8px" },
            }}
          >
            <LanguageIcon sx={{ fontSize: { xs: 16, sm: 18 }, mr: 0.5, color: "#111111" }} />
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
                    backgroundColor: "#ffffff",
                    minWidth: { xs: "80px", sm: "100px" },
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
                fontSize: { xs: "12px", sm: "13px" },
                fontWeight: 500,
                color: "#111111",
                minWidth: { xs: "40px", sm: "50px" },
                "& .MuiSelect-select": {
                  padding: { xs: "1px 3px", sm: "2px 4px" },
                },
                "&:hover": {
                  color: "#333333",
                },
              }}
            >
              <MenuItem value="en">
                <Box component="span" className="font-medium" ml={0.5}>
                  EN
                </Box>
              </MenuItem>
              <MenuItem value="es">
                <Box component="span" className="font-medium" ml={0.5}>
                  ES
                </Box>
              </MenuItem>
            </Select>
          </Box>

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