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

  const navItems = ["Features", "How It Works", "About Us", "For Driver"];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 30px",
        borderBottom: "1px solid #E4E4E4",
      }}
    >
      <Box display="flex" alignItems="center">
        <img src={Logo} alt="Logo" />
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        {navItems.map((item, index) => (
          <Typography
            key={index}
            sx={{
              cursor: "pointer",
              color: "#111111",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "24px",
            }}
          >
            {item}
          </Typography>
        ))}
        <Button width={"106px"}>Contact</Button>
      </Box>

      <IconButton
        sx={{ display: { xs: "block", md: "none" }, marginBottom: "6px" }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "20px",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Button width={106}>Contact</Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
