import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import {
  DollarSign,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Smile,
  CheckCircle,
  Car,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Benefit = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ marginY: 8 }} id="riders">
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          custom={0}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Chip
              label={t("winWin")}
              sx={{
                bgcolor: "rgba(255, 140, 0, 0.1)",
                color: "#FF8C00",
                mb: 2,
                fontWeight: 500,
                fontSize: "0.875rem",
                px: 2,
                py: 1,
                borderRadius: "9999px",
              }}
            />
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: 700, color: "text.primary", mb: 2 }}
            >
              {t("benefitsTitle")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: "600px",
                mx: "auto",
                fontSize: "1.125rem",
              }}
            >
              {t("benefitsDescription")}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {[...Array(2)].map((_, cardIdx) => (
            <Grid item xs={12} md={6} key={cardIdx}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
                custom={cardIdx + 1}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: "16px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <CardHeader
                    avatar={
                      <Box sx={{ bgcolor: "#dbeafe", p: 1.5, borderRadius: 2 }}>
                        {cardIdx === 0 ? (
                          <Car size={28} color="#2563eb" />
                        ) : (
                          <Smile size={28} color="#2563eb" />
                        )}
                      </Box>
                    }
                    title={
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {cardIdx === 0 ? t("drivers") : t("forRiders")}
                      </Typography>
                    }
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: "left" }}>
                    {[
                      cardIdx === 0
                        ? [
                            {
                              icon: <DollarSign size={20} color="#16a34a" />,
                              title: t("keepFares"),
                              desc: t("keepFaresDesc"),
                              bg: "#dcfce7",
                            },
                            {
                              icon: <Clock size={20} color="#2563eb" />,
                              title: t("flexibleSchedule"),
                              desc: t("flexibleScheduleDesc"),
                              bg: "#dbeafe",
                            },
                            {
                              icon: <TrendingUp size={20} color="#7c3aed" />,
                              title: t("transparentEarnings"),
                              desc: t("transparentEarningsDesc"),
                              bg: "#ede9fe",
                            },
                            {
                              icon: <Shield size={20} color="#f97316" />,
                              title: t("driverProtection"),
                              desc: t("driverProtectionDesc"),
                              bg: "#ffedd5",
                            },
                          ]
                        : [
                            {
                              icon: <DollarSign size={20} color="#16a34a" />,
                              title: t("lowerFares"),
                              desc: t("lowerFaresDesc"),
                              bg: "#dcfce7",
                            },
                            {
                              icon: <Zap size={20} color="#facc15" />,
                              title: t("fastPickup"),
                              desc: t("fastPickupDesc"),
                              bg: "#fef9c3",
                            },
                            {
                              icon: <Smile size={20} color="#ec4899" />,
                              title: t("happyDrivers"),
                              desc: t("happyDriversDesc"),
                              bg: "#fce7f3",
                            },
                            {
                              icon: <CheckCircle size={20} color="#6366f1" />,
                              title: t("safeJourneys"),
                              desc: t("safeJourneysDesc"),
                              bg: "#e0e7ff",
                            },
                          ],
                    ][0].map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={idx + 1}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "start",
                            mb: 3,
                          }}
                        >
                          <Box
                            sx={{
                              bgcolor: item.bg,
                              p: 1,
                              borderRadius: 2,
                              mr: 2,
                              mt: "4px",
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: "text.secondary" }}
                            >
                              {item.desc}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </CardContent>
                  <CardActions
                    sx={{
                      bgcolor: "#FF8C00",
                      color: "white",
                      p: 3,
                      mt: "auto",
                      borderRadius: "0 0 16px 16px",
                      textAlign: "left",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {cardIdx === 0
                          ? t("readyToEarn")
                          : t("betterRideTitle")}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mb: 2, color: "blue.100" }}
                      >
                        {cardIdx === 0
                          ? t("readyToEarnDesc")
                          : t("betterRideDesc")}
                      </Typography>
                      <Button
                        sx={{
                          backgroundColor: "background.paper",
                          color: "warning.main",
                          px: { xs: 3, md: 4 },
                          py: { xs: 1.2, md: 1.5 },
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          fontWeight: 600,
                          textTransform: "none",
                          borderRadius: "8px",
                          mt: 1,
                          "&:hover": {
                            backgroundColor: "grey.100",
                            boxShadow: "0 0 10px rgba(251, 191, 36, 0.4)",
                          },
                        }}
                      >
                        {cardIdx === 0 ? t("becomeDriver") : t("bookRide")}
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Benefit;
