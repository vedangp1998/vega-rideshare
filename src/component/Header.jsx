import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "./ui/Button";
import Logo from "../assets/Logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const navItems = [
    { label: "About Us", id: "about-us" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Riders", id: "riders" },
    { label: "Driver", id: "driver" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const elementTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      const elementHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate the scroll position to center the element vertically
      const scrollPosition =
        elementTop - viewportHeight / 2 + elementHeight / 2;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
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
      <Box display="flex" alignItems="center">
        <img
          src={Logo || "/placeholder.svg"}
          alt="Logo"
          style={{
            maxHeight: "40px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
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
              "&:hover": {
                color: "#555555",
              },
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
          Contact Us
        </Button>
      </Box>

      <IconButton
        sx={{
          display: { xs: "flex", md: "none" },
          color: "#111111",
          padding: "8px",
          marginLeft: "auto",
        }}
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
  );
};

export default Header;
