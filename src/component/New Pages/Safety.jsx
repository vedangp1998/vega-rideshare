import React from "react";
import { Shield, Users, AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  CardMedia,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const MotionBox = motion(Box);

const features = [
  {
    icon: Shield,
    title: "Real-time Trip Monitoring",
    description:
      "Our AI-powered system continuously monitors all rides for unusual activity or route deviations.",
    color: "#FB923C",
    bgColor: "#FFF7ED",
  },
  {
    icon: Users,
    title: "Extensive Driver Screening",
    description:
      "All VEGA drivers undergo thorough background checks and regular vehicle inspections.",
    color: "#FB923C",
    bgColor: "#FFF7ED",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Alert System",
    description:
      "One tap on the emergency button connects you with emergency services and VEGA support.",
    color: "#FB923C",
    bgColor: "#FFF7ED",
  },
];

export default function SafetyFeatures() {
  const [isPressed, setIsPressed] = useState(false);

  const handleEmergencyPress = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 2000);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto", px: 2, py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.75rem" },
            fontWeight: "bold",
            color: "#212529",
            lineHeight: 1.2,
          }}
        >
          Your Safety is Our{" "}
          <Box component="span" sx={{ color: "#FF8C00" }}>
            Priority
          </Box>{" "}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: "auto", mb: 3 }}
        >
          We've implemented comprehensive safety measures to ensure every ride
          with VEGA is secure and comfortable.
        </Typography>

        <Box
          component="img"
          src="https://picsum.photos/200"
          alt="VEGA safety"
          sx={{
            maxWidth: 300,
            width: "100%",
            height: "auto",
            mx: "auto",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Box>

      <Grid container spacing={3}>
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
                    bgcolor: "background.paper",
                    ":hover": {
                      borderColor: "#FDBA74",
                      boxShadow: 8,
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
                      {feature.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ width: "100%", maxWidth: "1440px", mx: "auto", mt: 6 }}>
        <Card
          sx={{
            backgroundColor: "#1a1f2c",
            color: "white",
            overflow: "hidden",
            borderRadius: "12px",
          }}
        >
          <CardContent sx={{ p: 1 }}>
            <Grid container>
              {/* Left Section */}
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 4, textAlign: "left" }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Emergency Button
                  </Typography>
                  <Typography paragraph>
                    In case of an emergency during your ride, tap the Emergency
                    Button to immediately alert our safety team and local
                    emergency services if needed. Your safety is just one tap
                    away.
                  </Typography>

                  <Button
                    onClick={handleEmergencyPress}
                    startIcon={<NotificationsActiveIcon />}
                    sx={{
                      bgcolor: "#ef4444",
                      "&:hover": { bgcolor: "#dc2626" },
                      color: "white",
                      fontWeight: 500,
                      py: 1.5,
                      px: 3,
                      borderRadius: 2,
                      transition: "all 0.2s ease-in-out",
                      transform: isPressed ? "scale(0.95)" : "scale(1)",
                      mt: 2,
                    }}
                    aria-label="Emergency Button"
                  >
                    Emergency Button
                  </Button>

                  <Typography variant="body2" sx={{ color: "#94a3b8", mt: 2 }}>
                    This is a demonstration of our emergency feature. In a real
                    VEGA ride, this button would connect you with emergency
                    services.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ p: 4 }}>
                  <Card
                    sx={{
                      bgcolor: "rgba(30, 41, 59, 0.6)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      color: "white",
                      borderRadius: 3,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      textAlign: "left",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Clean and Well-Maintained Vehicles
                      </Typography>
                      <Typography paragraph>
                        VEGA ensures all vehicles in our network maintain the
                        highest standards of cleanliness and safety. We conduct
                        regular inspections and require drivers to follow strict
                        maintenance protocols.
                      </Typography>

                      <Grid container spacing={4}>
                        {[1, 2].map((item) => (
                          <Grid item xs={6} key={item}>
                            <Box
                              sx={{
                                position: "relative",
                                height: 128,
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
                                transition:
                                  "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                  transform: "scale(1.03)",
                                  boxShadow:
                                    "0 0 25px rgba(255, 255, 255, 0.5)",
                                },
                              }}
                            >
                              <CardMedia
                                component="img"
                                height="128"
                                image={`https://picsum.photos/200`}
                                alt={
                                  item === 1
                                    ? "Vehicle at night with lights"
                                    : "Modern vehicle interior"
                                }
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
