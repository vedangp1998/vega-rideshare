import { Box, Typography } from "@mui/material";
import React from "react";
// import DollorIcon from "../assets/Dollor.svg";
// import WalletIcon from "../assets/wallet.svg";
// import OfferIcon from "../assets/offer.svg";
// import SosIcon from "../assets/sos.svg";
import { Shield, Users, AlertTriangle } from "lucide-react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, Grid } from "@mui/material";

// const cardData = [
//   {
//     title: "Fare Estimate",
//     description: `Get a clear, upfront fare estimate <br />
//       before, you book—no surprises, just<br />
//       transparent pricing every time<br />
//       you ride.`,
//     icon: DollorIcon,
//   },
//   {
//     title: "Secure Payment",
//     description: `Enjoy safe and hassle-free <br />
//      transactions with multiple payment </br>
//      options and encrypted <br />
//      security.`,
//     icon: WalletIcon,
//   },
//   {
//     title: "Exclusive Offers",
//     description: `Unlock special discounts and<br />
//       offers for loyal riders and drivers, <br />
//       making every ride more<br />
//       rewarding.`,
//     icon: OfferIcon,
//   },
//   // {
//   //   title: "SOS Button",
//   //   description: `Safety first! Our in-app SOS <br />
//   //     button ensures instant access to <br />
//   //     emergency support when <br />
//   //     needed.`,
//   //   icon: SosIcon,
//   // },
// ];

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

const MotionBox = motion(Box);

const WhatWePrioritize = () => {
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
          What we <span style={{ color: "#FF8C00" }}>prioritize </span>
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
          Vega Ride is designed to offer a seamless, affordable, and secure
          ride-hailing experience for both riders and drivers.
        </Typography>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: { lg: "space-between", md: "center", xs: "center" },
          width: "100%",
          gap: { xs: 4, sm: 5.5, md: 1.75 },
        }}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              background: "#EDECE3",
              borderRadius: "16px",
              width: { xs: "90%", sm: "45%", md: "311px" },
              height: "320px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "#FF8C00",
                color: "white",
                width: "80px",
                height: "80px",
                p: 1,
                mr: 1,
              }}
            >
              <img src={card.icon} width={40} height={40} />
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>
              {card.title}
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                color: "rgba(17, 17, 17, 0.6)",
                textAlign: "center",
              }}
              dangerouslySetInnerHTML={{ __html: card.description }}
            />
          </Box>
        ))}
      </Box> */}

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
                    // bgcolor: "background.paper",
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
    </Box>
  );
};

export default WhatWePrioritize;
