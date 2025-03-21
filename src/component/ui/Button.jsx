import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ children, onClick, width, sx = {} }) => {
  return (
    <MuiButton
      onClick={onClick}
      sx={{
        height: "47px",
        textAlign: "center",
        background: "#002652",
        borderRadius: "30px",
        color: "#ffffff",
        lineHeight: "24px",
        fontWeight: 500,
        fontSize: "18px",
        width: width,
        textTransform: "none",
        ...sx,
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
