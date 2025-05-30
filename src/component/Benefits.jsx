import { Box, Typography } from "@mui/material";
import React from "react";
import DollorIcon from "../assets/Dollor.svg";
import WalletIcon from "../assets/wallet.svg";
import OfferIcon from "../assets/offer.svg";
import SosIcon from "../assets/sos.svg";

const cardData = [
  {
    title: "Fare Estimate",
    description: `Get a clear, upfront fare estimate <br />
      before, you book—no surprises, just<br />
      transparent pricing every time<br />
      you ride.`,
    icon: DollorIcon,
  },
  {
    title: "Secure Payment",
    description: `Enjoy safe and hassle-free <br /> 
     transactions with multiple payment </br> 
     options and encrypted <br />
     security.`,
    icon: WalletIcon,
  },
  {
    title: "Exclusive Offers",
    description: `Unlock special discounts and<br />
      offers for loyal riders and drivers, <br />
      making every ride more<br />
      rewarding.`,
    icon: OfferIcon,
  },
  {
    title: "SOS Button",
    description: `Safety first! Our in-app SOS <br />
      button ensures instant access to <br />
      emergency support when <br />
      needed.`,
    icon: SosIcon,
  },
];

const Benifit = () => {
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
          Benefits of <span style={{ color: "#FF8C00" }}>Vega Ride </span>
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
      <Box
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
      </Box>
    </Box>
  );
};

export default Benifit;
