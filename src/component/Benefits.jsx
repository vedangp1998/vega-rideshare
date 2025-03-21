import { Box, Typography } from "@mui/material";
import React from "react";
import DollorIcon from "../assets/Dollor.svg";
import WalletIcon from "../assets/wallet.svg";
import OfferIcon from "../assets/offer.svg";
import SosIcon from "../assets/sos.svg";

const cardData = [
  {
    title: "Fare Estimate",
    description: `Vega is a ride-hailing company with a<br />
      mission to empower drivers while<br />
      providing passengers with<br />
      affordable rides.`,
    icon: DollorIcon,
  },
  {
    title: "Secure Payment",
    description: `Vega is a ride-hailing company with a<br />
      mission to empower drivers while<br />
      providing passengers with<br />
      affordable rides.`,
    icon: WalletIcon,
  },
  {
    title: "Exclusive Offers",
    description: `Vega is a ride-hailing company with a<br />
      mission to empower drivers while<br />
      providing passengers with<br />
      affordable rides.`,
    icon: OfferIcon,
  },
  {
    title: "SOS Button",
    description: `Vega is a ride-hailing company with a<br />
      mission to empower drivers while<br />
      providing passengers with<br />
      affordable rides.`,
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
        gap: 12,
        marginY: "120px",
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
          Benefits of <span style={{ color: "#FF8C00" }}>Vega App</span>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          Vega is a ride-hailing company with a mission to empower<br></br>{" "}
          drivers while providing passengers with affordable and <br></br>{" "}
          reliable rides.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: { lg: "space-between", md: "center" },
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
