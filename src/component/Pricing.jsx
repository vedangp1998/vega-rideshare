import React, { useState } from "react";
import { Box, Divider, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/CheckCircleOutline";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 13,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false); // Default to daily
  const { t } = useTranslation();

  const dailyPlan = {
    title: t("dailyTitle"),
    description: t("dailyDesc"),
    features: [
      t("dailyFeat1"),
      t("dailyFeat2"),
      t("dailyFeat3"),
      t("dailyFeat4"),
    ],
  };

  const monthlyPlan = {
    title: t("monthlyTitle"),
    description: t("monthlyDesc"),
    features: [
      t("monthlyFeat1"),
      t("monthlyFeat2"),
      t("monthlyFeat3"),
      t("monthlyFeat4"),
    ],
  };

  const plan = isMonthly ? monthlyPlan : dailyPlan;

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
        marginY: { xs: "60px", sm: "80px", md: "100px" },
        paddingX: 2,
      }}
    >
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "36px", md: "40px" },
            fontWeight: 700,
            lineHeight: { xs: "4px", sm: "6px", md: "10px" },
            color: "#002652",
          }}
        >
          <span style={{ color: "#FF8C00" }}>{t("plansAndPricing")}</span>
        </Typography>
      </Box>

      {/* Toggle Switch */}
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
          {t("billDaily")}
        </Typography>
        <IOSSwitch
          checked={isMonthly}
          onChange={() => setIsMonthly((prev) => !prev)}
        />
        <Typography sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}>
          {t("billMonthly")}
        </Typography>
      </Box>

      {/* Plan Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isMonthly ? "monthly" : "daily"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          <Box
            sx={{
              borderRadius: "16px",
              textAlign: "left",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              padding: 4,
              width: { xs: "100%", sm: "80%", md: "30%" },
              border: "1px solid rgba(206, 206, 206, 1)",
              background: "#FFFFFF",
              color: "#000",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              transition: "0.3s",
            }}
          >
            <Box sx={{ textAlign: "left", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "28px", md: "30px" },
                  fontWeight: 600,
                  lineHeight: { xs: "32px", sm: "36px", md: "40px" },
                  mb: 1,
                  color: "#002652",
                }}
              >
                {plan.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(17, 17, 17, 0.6)",
                }}
              >
                {plan.description}
              </Typography>
            </Box>

            <Divider sx={{ color: "#CECECE" }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {plan.features.map((feature, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 0.5,
                    gap: 1.5,
                  }}
                >
                  <CheckIcon sx={{ fontSize: "20px", color: "#FF8C00" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(17, 17, 17, 0.8)",
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(17, 17, 17, 0.6)",
                  mt: 2,
                }}
              >
                {t("contact-Us")}{" "}
                <a
                  href="mailto:sales@vegacab.com"
                  style={{
                    color: "#FF8C00",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  sales@vegacab.com
                </a>
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Pricing;
