import React from "react";
import { Box, Typography } from "@mui/material";
import IphoneTopImage from "../assets/IphoneTop.svg";
import IphoneBottomImage from "../assets/iphoneBottom.svg";

const BookingProcess = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeight: "auto",
        height: "auto",
        gap: 8,
        padding: { xs: "30px", sm: "40px", md: "60px" },
        background: "#003366",
        borderRadius: "34px",
        marginY: "60px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "35px", md: "40px" },
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          Benefits of <span style={{ color: "#FF8C00" }}>Vega App</span>
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: { xs: "14px", sm: "18px", md: "20px" },
            maxWidth: "550px",
            width: "auto",
          }}
        >
          Vega is a ride-hailing company with a mission to empower drivers while
          providing passengers with affordable and reliable rides.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: { xs: 4, sm: 6, md: 3 },
        }}
      >
        {[
          { title: "Easy Booking Process", img: IphoneTopImage },
          { title: "Personalized Ride Tracking", img: IphoneBottomImage },
          { title: "Instant Driver Chat & Call", img: IphoneTopImage },
        ].map((card, index) => (
          <Box
            key={index}
            sx={{
              background: "#FFFFFF",
              width: { xs: "90%", sm: "60%", md: "369px" },
              maxWidth: "369px",
              height: "483px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "16px",
              // padding: { xs: "16px", sm: "20px", md: "6px 6px 0px 6px" },
            }}
          >
            {index !== 1 && (
              <Box sx={{ textAlign: "center", padding: "20px" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "24px", xs: "18px" },
                    letterSpacing: "0%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: { md: "16px", xs: "14px", sm: "14px" },
                    lineHeight: "20px",
                    letterSpacing: "0%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    color: "rgba(17, 17, 17, 0.6)",
                    maxWidth: "329px",
                    width: "100%",
                  }}
                >
                  Vega is a ride-hailing company with a mission to empower
                  drivers while providing passengers with affordable rides.
                </Typography>
              </Box>
            )}

            <Box
              component="img"
              src={card.img}
              sx={{
                width: { lg: "233px", md: "233px", xs: "180px", sm: "233px" },
                height: { lg: "314px", xs: "auto", sm: "272px", md: "290px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />

            {index === 1 && (
              <Box
                sx={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "24px", xs: "18px" },
                    letterSpacing: "0%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    marginBottom: "8px",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: { md: "16px", xs: "14px", sm: "14px" },
                    lineHeight: "20px",
                    letterSpacing: "0%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    color: "rgba(17, 17, 17, 0.6)",
                    maxWidth: "329px",
                    width: "100%",
                  }}
                >
                  Vega is a ride-hailing company with a mission to empower
                  drivers while providing passengers with affordable rides.
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BookingProcess;
