import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useTranslation } from "react-i18next";

function TestimonialCard({ compact = false, rating = 5, comment, name, role }) {
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
          <Rating value={rating} readOnly sx={{ color: "#FF8A00" }} />
          <Typography sx={{ ml: 1, color: "#FF8A00", fontWeight: "medium" }}>
            {rating.toFixed(1)}
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
            fontWeight: "700",
            color: "#002652",
            mb: 2,
            mt: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          "{comment}"
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
          {name} -{" "}
          <span
            style={{
              fontSize: "17px",
              fontWeight: 600,
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {role}
          </span>
        </Typography>
      </Box>
    </Box>
  );
}

const Customer = () => {
  const { t } = useTranslation();

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
            {t("customer.title")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            {t("customer.description")}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TestimonialCard
              rating={5}
              comment={t("customer.testimonials.0.comment")}
              name={t("customer.testimonials.0.name")}
              role={t("customer.testimonials.0.role")}
            />
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
              <TestimonialCard
                compact
                rating={4.5}
                comment={t("customer.testimonials.1.comment")}
                name={t("customer.testimonials.1.name")}
                role={t("customer.testimonials.1.role")}
              />
              <TestimonialCard
                compact
                rating={4.0}
                comment={t("customer.testimonials.2.comment")}
                name={t("customer.testimonials.2.name")}
                role={t("customer.testimonials.2.role")}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <TestimonialCard
              rating={5}
              comment={t("customer.testimonials.3.comment")}
              name={t("customer.testimonials.3.name")}
              role={t("customer.testimonials.3.role")}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Customer;
