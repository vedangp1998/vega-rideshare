import React from "react";
import { Box, Typography, Button, Grid, Container, Paper } from "@mui/material";

export default function AboutPage() {
  const stats = [
    { number: "50+", label: "Cities" },
    { number: "500K+", label: "Happy Riders" },
    { number: "25K+", label: "Dedicated Drivers" },
    { number: "5M+", label: "Rides Completed" },
  ];

  const coreValues = [
    {
      number: "01",
      title: "Fair Compensation",
      description:
        "We believe drivers deserve to keep 100% of what they earn from providing excellent service.",
    },
    {
      number: "02",
      title: "Safety First",
      description:
        "Every decision we make puts the safety of our riders and drivers at the forefront.",
    },
    {
      number: "03",
      title: "Community Focused",
      description:
        "We're building more than a service; we're creating a community of drivers and riders who believe in a better way.",
    },
  ];

  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200",
    "https://picsum.photos/200/300?grayscale",
  ];

  const imageBorderRadius = "12px";

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: { xs: 4, md: 5 },
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Box
          sx={{
            flex: "0 0 auto",
            width: { xs: "100%", md: "58%" },
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
            About{" "}
            <Box component="span" sx={{ color: "#FF8C00" }}>
              VEGA
            </Box>{" "}
            Rideshare
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              lineHeight: 1.7,
              color: "#495057",
              fontSize: { xs: "0.95rem", md: "1rem" },
              maxWidth: { xs: "90%", sm: "100%" },
            }}
          >
            VEGA Rideshare was founded in 2023 with a simple mission: create a
            transportation platform that truly works for both drivers and
            riders. We believe the rideshare industry needed a fresh approach.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              lineHeight: 1.7,
              color: "#495057",
              fontSize: { xs: "0.95rem", md: "1rem" },
              maxWidth: { xs: "90%", sm: "100%" },
            }}
          >
            Our innovative subscription model for drivers ensures they keep 100%
            of their ride fares, while our efficient operations allow us to
            offer riders the best prices in the market. It's a win-win approach
            that's transforming urban transportation.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              lineHeight: 1.7,
              color: "#495057",
              fontSize: { xs: "0.95rem", md: "1rem" },
              maxWidth: { xs: "90%", sm: "100%" },
            }}
          >
            Today, VEGA operates in over 50 cities nationwide and continues to
            expand rapidly as more drivers and riders discover the VEGA
            difference. We're not just another rideshare company – we're
            building the future of transportation.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
              width: "100%",
              maxWidth: { xs: "320px", sm: "100%" },
            }}
          >
            {stats.map((stat, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  flex: { xs: "1 1 calc(50% - 8px)", sm: "1" },
                  p: { xs: 1.5, md: 2 },
                  textAlign: "center",
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
            Join Our Mission
          </Button>
        </Box>

        <Box
          sx={{
            flex: "0 0 auto",
            width: { xs: "100%", sm: "80%", md: "40%" },
            mt: { xs: 4, md: "70px" },
            maxWidth: { xs: "400px", md: "none" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          <Grid container spacing={{ xs: 1.5, md: 2 }}>
            <Grid item xs={6}>
              <Box
                component="img"
                src={images[0]}
                alt="Image 1"
                sx={{
                  width: "100%",
                  height: { xs: "120px", sm: "140px", md: "160px" },
                  objectFit: "cover",
                  borderRadius: imageBorderRadius,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src={images[1]}
                alt="Image 2"
                sx={{
                  width: "100%",
                  height: { xs: "120px", sm: "140px", md: "160px" },
                  objectFit: "cover",
                  borderRadius: imageBorderRadius,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src={images[2]}
                alt="Image 3"
                sx={{
                  width: "100%",
                  height: { xs: "140px", sm: "170px", md: "190px" },
                  objectFit: "cover",
                  borderRadius: imageBorderRadius,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src={images[3]}
                alt="Image 4"
                sx={{
                  width: "100%",
                  height: { xs: "140px", sm: "170px", md: "190px" },
                  objectFit: "cover",
                  borderRadius: imageBorderRadius,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 4, md: 4 }, py: { xs: 4, md: 4 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            fontWeight: "bold",
            color: "#212529",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.25rem" },
          }}
        >
          Our Core Values
        </Typography>

        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {coreValues.map((value, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              key={index}
              sx={{ display: "flex" }}
            >
              <Paper
                elevation={0}
                sx={{
                  textAlign: "center",
                  p: { xs: 2.5, md: 3 },
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.10)",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 50, md: 60 },
                    height: { xs: 50, md: 60 },
                    borderRadius: "50%",
                    backgroundColor: "#fef1e7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#FF8C00",
                      fontWeight: "bold",
                      fontSize: { xs: "1.2rem", md: "1.4rem" },
                    }}
                  >
                    {value.number}
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1.5,
                    color: "#343a40",
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6c757d",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.875rem", md: "0.95rem" },
                    px: { xs: 1, md: 0 },
                    flexGrow: 1,
                  }}
                >
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
