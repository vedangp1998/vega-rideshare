import React, { useState, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import IphoneTopImage from "../assets/IphoneTop.svg";
import IphoneBottomImage from "../assets/iphoneBottom.svg";

const slides = [
  {
    title: "Easy Booking Process",
    description:
      "Book your ride in just a few taps with our intuitive and user-friendly app. Get where you need to go quickly and hassle-free.",
    image: IphoneTopImage,
  },
  {
    title: "Personalized Ride Tracking",
    description:
      "Track your ride in real-time with GPS navigation. Stay updated on your driver’s location and ETA effortlessly.",
    image: IphoneBottomImage,
  },
  {
    title: "Instant Driver Chat & Call",
    description:
      "Communicate instantly with your driver through in-app chat or call for a smoother and safer experience.",
    image: IphoneTopImage,
  },
];

const BookingProcess = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const containerRef = useRef(null);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -500) {
      setIndex((prev) => (prev + 1) % slides.length);
    } else if (offset > 50 || velocity > 500) {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "#002652",
        borderRadius: "30px",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, sm: 7, md: 8 },
        userSelect: "none",
        overflow: "hidden",
        mt: { xs: 6, md: 10 },
        mb: { xs: 6, md: 10 },
      }}
    >
      {/* Heading */}
      <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "32px", md: "38px" },
            color: "#FFFFFF",
            lineHeight: 1.2,
          }}
        >
          Benefits of{" "}
          <Box component="span" sx={{ color: "#FF8C00" }}>
            Vega Ride
          </Box>
        </Typography>
      </Box>

      {/* Carousel container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 8 },
          mx: "auto",
          position: "relative",
          maxWidth: "1200px",
        }}
        ref={containerRef}
      >
        {/* Content box */}
        <Box
          sx={{
            flex: 1,
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: 4,
            px: { xs: 3, sm: 5 },
            py: { xs: 3, sm: 5 },
            color: "#fff",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
            maxWidth: isMobile ? "100%" : 540,
            textAlign: isMobile ? "center" : "left",
            minHeight: isMobile ? "auto" : 280,
            transition: "all 0.35s ease",
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "22px", sm: "26px", md: "30px" },
                  mb: 2,
                  letterSpacing: "-0.8px",
                  color: "#fff",
                }}
              >
                {slides[index].title}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "15px", sm: "16px", md: "18px" },
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {slides[index].description}zz
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Image stack */}
        <Box
          sx={{
            position: "relative",
            width: { xs: 250, sm: 280, md: 320 },
            height: { xs: 300, sm: 320, md: 420 },
            mx: "auto",
            mb: isMobile ? 4 : 0,
            maxWidth: "100%",
          }}
        >
          {[2, 1, 0].map((offset) => {
            const slideIndex = (index + offset) % slides.length;
            const slide = slides[slideIndex];

            const scale = 1 - (2 - offset) * 0.08;
            const xOffset = (2 - offset) * 40;
            const zIndex = 10 + offset;
            const opacity = offset === 2 ? 1 : 0.2;

            return (
              <motion.img
                key={slide.title}
                src={slide.image}
                alt={slide.title}
                drag={offset === 2 ? "x" : false}
                dragConstraints={containerRef}
                dragElastic={0.2}
                onDragEnd={offset === 2 ? handleDragEnd : undefined}
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${xOffset}px`,
                  width: "100%",
                  height: "auto",
                  borderRadius: 24,
                  scale,
                  opacity,
                  zIndex,
                  touchAction: "none",
                  cursor: offset === 2 ? "grab" : "default",
                  boxShadow:
                    offset === 2
                      ? "0 12px 30px rgba(0,0,0,0.2)"
                      : "0 8px 20px rgba(0,0,0,0.1)",
                  transition: "box-shadow 0.3s ease",
                }}
                whileTap={{ cursor: "grabbing", scale: 0.97 }}
                whileHover={offset === 2 ? { scale: 1.03 } : {}}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity, scale, x: xOffset }}
                exit={{ opacity: 0, scale: 0.8, x: 50 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                  mass: 0.8,
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default BookingProcess;
