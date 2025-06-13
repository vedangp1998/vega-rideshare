import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Shield, Users, AlertTriangle } from "lucide-react";
import { useInView, motion } from "framer-motion";
import { Card, CardContent, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const features = [
  {
    icon: Shield,
    titleKey: "realTimeTripMonitoring",
    descriptionKey: "realTimeTripMonitoringDesc",
    color: "#FB923C",
    bgColor: "#FFF7ED",
  },
  {
    icon: Users,
    titleKey: "extensiveDriverScreening",
    descriptionKey: "extensiveDriverScreeningDesc",
    color: "#FB923C",
    bgColor: "#FFF7ED",
  },
  {
    icon: AlertTriangle,
    titleKey: "emergencyAlertSystem",
    descriptionKey: "emergencyAlertSystemDesc",
    color: "#FB923C",
    bgColor: "#FFF7ED",
  },
];

const MotionBox = motion(Box);

const WhatWePrioritize = () => {
  const { t } = useTranslation();
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "auto",
        gap: 8,
        my: 12,
      }}
    >
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "35px", md: "40px" },
            fontWeight: 700,
            lineHeight: "44px",
          }}
        >
          {t("whatWe")}{" "}
          <span style={{ color: "#FF8C00" }}>{t("prioritize")}</span>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            fontWeight: 500,
            lineHeight: "24px",
            marginTop: 1,
            width: "100%",
            maxWidth: "900px",
          }}
        >
          {t("prioritizeDesc")}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Grid item xs={12} md={4} key={index}>
              <MotionBox
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ height: "100%" }}
              >
                <Card
                  elevation={4}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid",
                    borderColor: "grey.200",
                    transition: "all 0.3s ease",
                    textAlign: "left",
                    borderRadius: 3,
                    background: "#EDECE3",
                    ":hover": {
                      borderColor: "#FDBA74",
                      boxShadow: 4,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: feature.bgColor,
                        transition: "transform 0.3s",
                        ":hover": { transform: "scale(1.1)" },
                      }}
                    >
                      <Icon size={24} color={feature.color} />
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "text.primary",
                        transition: "color 0.3s",
                        ":hover": { color: "#EA580C" },
                      }}
                    >
                      {t(feature.titleKey)}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {t(feature.descriptionKey)}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WhatWePrioritize;
