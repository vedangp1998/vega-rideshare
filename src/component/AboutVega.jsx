import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Button from "./ui/Button";
import MobileImage from "../assets/MobileOnHand_2.png";
// import MobileImage from "../assets/Mobileonhand.svg";

import { useTranslation } from "react-i18next";
import CheckIcon from "@mui/icons-material/Check";

const AboutVega = () => {
  const { t } = useTranslation();

  const stats = [
    { number: "50+", label: t("rides") },
    { number: "500K+", label: t("happyRiders") },
    { number: "25K+", label: t("dedicatedDrivers") },
    { number: "5M+", label: t("ridesCompleted") },
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          background: "#EDECE3",
          borderRadius: "34px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "auto",
          p: { xs: 3, sm: 4, md: 8, lg: 8 },
          marginY: { xs: "50px" },
        }}
        id="about-us"
      >
        <Box
          component="img"
          src={MobileImage}
          alt="Vega App"
          sx={{
            position: "absolute",
            top: { xs: "93%", sm: "93%", md: "42%", lg: "46%" },
            left: { xs: "76%", sm: "80%", md: "5%" },
            transform: "translateY(-50%)",
            width: { xs: "110px", sm: "180px", md: "450px", lg: "580px" },
            height: "auto",
            objectFit: "contain",
            borderTop: "'none",
          }}
        />

        <Box
          sx={{
            flex: "0 0 auto",
            width: { xs: "100%", md: "50%" },
            pr: { md: 3 },
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.75rem" },
              fontWeight: "bold",
              mb: 3,
              color: "#212529",
              lineHeight: 1.2,
            }}
          >
            {t("about")}{" "}
            <Box component="span" sx={{ color: "#FF8C00" }}>
              VEGA
            </Box>{" "}
            Rideshare
          </Typography>

          <Box sx={{ maxWidth: "80%" }}>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                lineHeight: 1.7,
                color: "#495057",
                fontSize: { xs: "0.95rem", md: "1rem" },
                textAlign: "justify",
              }}
            >
              {t("aboutPara1")}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
                lineHeight: 1.7,
                color: "#495057",
                fontSize: { xs: "0.95rem", md: "1rem" },
                textAlign: "justify",
              }}
            >
              {t("aboutPara2")}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                lineHeight: 1.7,
                color: "#495057",
                fontSize: { xs: "0.95rem", md: "1rem" },
                textAlign: "justify",
              }}
            >
              {t("aboutPara3")}
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF8C00",
              color: "white",
              px: { xs: 3, md: 4 },
              py: { xs: 1.2, md: 1.5 },
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              "&:hover": {
                backgroundColor: "#FF9E20",
                boxShadow: "0 0 10px rgba(255, 140, 0, 0.5)",
              },
            }}
          >
            {t("joinMission")}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
          mt: 10,
          mb: 4,
          width: "100%",
          maxWidth: { xs: "320px", sm: "100%" },
          mx: "auto",
        }}
      >
        {stats.map((stat, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              flex: { xs: "1 1 calc(50% - 8px)", sm: "1" },
              p: { xs: 1.5, md: 2 },
              backgroundColor: "#ffffff",
              border: "1px solid #e9ecef",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
              minWidth: { xs: "140px", sm: "auto" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#FF8C00",
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.75rem" },
                lineHeight: 1.1,
                mb: 0.5,
              }}
            >
              {stat.number}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#6c757d",
                fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.813rem" },
                fontWeight: 500,
              }}
            >
              {stat.label}
            </Typography>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default AboutVega;
