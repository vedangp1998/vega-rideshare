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

const Benefit = () => {
  return (
    <Box sx={{  marginY: 8 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="Win-Win Experience"
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
            Benefits for Everyone
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
            Our unique model creates value for both drivers and riders. See how
            Vega is transforming the rideshare experience for everyone involved.
          </Typography>
        </Box>

        {/* Benefits Grid */}
        <Grid container spacing={4}>
          {/* For Drivers */}
          <Grid item xs={12} md={6}>
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
                    <Car size={28} color="#2563eb" />
                  </Box>
                }
                title={
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    For Drivers
                  </Typography>
                }
              />
              <CardContent sx={{ flexGrow: 1, textAlign: "left" }}>
                {[
                  {
                    icon: <DollarSign size={20} color="#16a34a" />,
                    title: "Keep 100% of Fares",
                    desc: "No commission fees means you take home every dollar you earn from rides.",
                    bg: "#dcfce7",
                  },
                  {
                    icon: <Clock size={20} color="#2563eb" />,
                    title: "Flexible Schedule",
                    desc: "Drive when you want with no minimum hours requirement.",
                    bg: "#dbeafe",
                  },
                  {
                    icon: <TrendingUp size={20} color="#7c3aed" />,
                    title: "Transparent Earnings",
                    desc: "Clear, simple pricing lets you predict your income with confidence.",
                    bg: "#ede9fe",
                  },
                  {
                    icon: <Shield size={20} color="#f97316" />,
                    title: "Driver Protection",
                    desc: "Comprehensive insurance coverage and 24/7 support for peace of mind.",
                    bg: "#ffedd5",
                  },
                ].map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{ display: "flex", alignItems: "start", mb: 3 }}
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
                    Ready to earn more?
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "blue.100" }}>
                    Join thousands of satisfied drivers who've increased their
                    income by switching to Vega.
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
                    Become a Driver
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* For Riders */}
          <Grid item xs={12} md={6}>
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
                    <Smile size={28} color="#2563eb" />
                  </Box>
                }
                title={
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    For Riders
                  </Typography>
                }
              />
              <CardContent sx={{ flexGrow: 1, textAlign: "left" }}>
                {[
                  {
                    icon: <DollarSign size={20} color="#16a34a" />,
                    title: "Lower Fares",
                    desc: "Enjoy more affordable rides without sacrificing quality or safety.",
                    bg: "#dcfce7",
                  },
                  {
                    icon: <Zap size={20} color="#facc15" />,
                    title: "Fast Pickup Times",
                    desc: "Our efficient matching system means shorter wait times.",
                    bg: "#fef9c3",
                  },
                  {
                    icon: <Smile size={20} color="#ec4899" />,
                    title: "Happier Drivers",
                    desc: "Drivers who earn more provide better service and friendlier rides.",
                    bg: "#fce7f3",
                  },
                  {
                    icon: <CheckCircle size={20} color="#6366f1" />,
                    title: "Safe Journeys",
                    desc: "Rigorous driver screening and real-time trip monitoring for your safety.",
                    bg: "#e0e7ff",
                  },
                ].map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{ display: "flex", alignItems: "start", mb: 3 }}
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
                    Experience better rides
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "blue.100" }}>
                    Download the Vega app today and discover why more riders are
                    making the switch to a smarter, smoother ride experience.
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
                    Book a Ride
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Benefit;
