import React from "react";
import { Box, Divider, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import Button from "./ui/Button";

const features = [
  "Vega is a ride-hailing company ",
  "Vega is a ride-hailing company ",
  "Vega is a ride-hailing company ",
];

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#FF8C00",

      "& + .MuiSwitch-track": {
        backgroundColor: "#F4F4F4",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

const Pricing = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "auto",
        gap: { xs: 3, sm: 4, md: 4 },
        marginY: { xs: "60px", sm: "80px", md: "120px" },
        paddingX: { xs: 2, sm: 4, md: 0 },
      }}
    >
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              sm: "20px",
              md: "20px",
              color: "rgba(17, 17, 17, 0.6)",
            },
          }}
        >
          - Pricing and Plans
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "36px", md: "40px" },
            fontWeight: 700,
            lineHeight: { xs: "36px", sm: "42px", md: "44px" },
          }}
        >
          Let’s Know the Pricing
          <br />
          <span style={{ color: "#FF8C00" }}>Plan for You</span>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}>
          Bill Annually
        </Typography>
        <IOSSwitch />
        <Typography sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}>
          Bill Annually
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {[29, 49, 99].map((price, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "16px",
              textAlign: "left",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              padding: 4,
              width: { xs: "100%", sm: "80%", md: "30%" },
              border: index === 1 ? "none" : "1px solid rgba(206, 206, 206, 1)",
              background: index === 1 ? "#FF8C00" : "#FFFFFF",
              color: index === 1 ? "#FFFFFF" : "#000",
            }}
          >
            <Box sx={{ textAlign: "left", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "32px", sm: "36px", md: "40px" },
                  fontWeight: 600,
                  lineHeight: { xs: "38px", sm: "42px", md: "44px" },
                }}
              >
                ${price}{" "}
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: index === 1 ? "#FFFFFF" : "rgba(17, 17, 17, 0.5)",
                  }}
                >
                  /month
                </span>
              </Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                {price === 99 ? "Premium" : "Basic"}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: index === 1 ? "#FFFFFF" : "rgba(17, 17, 17, 0.6)",
                }}
              >
                Vega is a ride-hailing company with a mission to <br />
                empower drivers while providing passengers with <br />
                affordable rides.
              </Typography>
            </Box>

            <Divider sx={{ color: "#CECECE" }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box>
                {features.map((text, i) => (
                  <Box
                    key={i}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: index === 1 ? "#FFFFFF" : "#FF8C00",
                        color: index === 1 ? "#FF8C00" : "#FFFFFF",
                        width: "20px",
                        height: "21px",
                        p: 1,
                        mr: 1.5,
                      }}
                    >
                      <CheckIcon
                        sx={{
                          fontSize: "14px",
                          color: index === 1 ? "#FF8C00" : "#FFFFFF",
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color:
                          index === 1 ? "#FFFFFF" : "rgba(17, 17, 17, 0.6)",
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    width: "106px",
                    background: index === 1 ? "#FFFFFF" : "#002652",
                    color: index === 1 ? "#003366" : "#FFFFFF",
                  }}
                >
                  Choose
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Pricing;
