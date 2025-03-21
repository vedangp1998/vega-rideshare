import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function TestimonialCard({ compact = false }) {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "34px",
        padding: compact ? "16px" : "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        textAlign: "left",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Box sx={{ display: "flex", mb: 2 }}>
          <Rating value={5} readOnly sx={{ color: "#FF8A00" }} />
          <Typography sx={{ ml: 1, color: "#FF8A00", fontWeight: "medium" }}>
            5.0
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: compact ? "50px" : "60px",
            left: compact ? "16px" : "24px",
            opacity: 0.1,
            transform: "scale(2)",
          }}
        >
          <FormatQuoteIcon fontSize="medium" />
        </Box>

        <Typography
          sx={{
            fontSize: compact ? "16px" : "24px",
            fontWeight: compact ? "700" : "700",
            color: "#002652",
            mb: 2,
            mt: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          "As a passenger, I love that Vega rides are cheaper, and the drivers
          are much happier. It's a win-win!"
        </Typography>
      </Box>

      <Box sx={{ mt: "auto" }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Vedang Prajapati -{" "}
          <span
            style={{
              fontSize: "17px",
              fontWeight: 600,
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            SEO
          </span>
        </Typography>
      </Box>
    </Box>
  );
}

const Customer = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#f5f2e8",
          borderRadius: "16px",
          padding: { xs: "24px", md: "40px" },
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            mb: 4,
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "40px" },
              fontWeight: 700,
            }}
          >
            Our Customer Testimonials
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            Vega is a ride-hailing company with a mission to empower <br />{" "}
            drivers while providing passengers with affordable and <br />{" "}
            reliable rides.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TestimonialCard />
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                height: "100%",
              }}
            >
              <TestimonialCard compact />
              <TestimonialCard compact />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <TestimonialCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Customer;
