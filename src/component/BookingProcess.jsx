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
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "35px", md: "40px" },
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          Benefits of <span style={{ color: "#FF8C00" }}>Vega Ride</span>
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
          }}
        >
          Vega Ride Share is designed to provide a fast, reliable, and seamless
          <br /> ride experience. Our features make booking, tracking, and{" "}
          <br /> communicating easier than ever.
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
              width: { xs: "90%", sm: "75%", md: "369px" },
              height: "483px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "16px",
            }}
          >
            {index !== 1 && (
              <Box sx={{ marginTop: "24px", textAlign: "center" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "14px",
                      lg: "14px",
                    },
                    color: "rgba(17, 17, 17, 0.6)",
                    textAlign: "center",
                  }}
                >
                  Book your ride in just a few taps with our intuitive <br />
                  and user-friendly app. Get where you need <br />
                  to go quickly and hassle-free.
                </Typography>
              </Box>
            )}

            <Box>
              <img
                src={card.img}
                style={{ width: "100%", maxWidth: "200px" }}
              />
            </Box>

            {index === 1 && (
              <Box sx={{ marginBottom: "24px", textAlign: "center" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "24px" }}>
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "14px",
                      lg: "14px",
                    },
                    color: "rgba(17, 17, 17, 0.6)",
                    textAlign: "center",
                  }}
                >
                  Track your ride in real time with accurate GPS <br />
                  navigation. Stay updated on your driver’s location <br />
                  and estimated arrival time.
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
