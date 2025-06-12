// import React, { useState } from "react";
// import { Box, Divider, Switch, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import CheckIcon from "@mui/icons-material/Check";
// import { AnimatePresence, motion } from "framer-motion";
// import Button from "./ui/Button";

// const plansMonthly = [
//   {
//     price: 29,
//     title: "Starter Plan",
//     description:
//       "Start your journey with Vega! This plan is ideal for part-time drivers who want flexible earnings with essential features.",
//     features: [
//       "Access to ride requests",
//       "Standard support",
//       "Basic earning analytics",
//     ],
//   },
//   {
//     price: 49,
//     title: " Pro Plan (Most Popular)",
//     description:
//       "Drive smarter and earn more! This plan is perfect for full-time drivers who need priority access and lower fees.",
//     features: [
//       "Everything in Starter Plan",
//       "Priority ride matching",
//       "Advanced earning insights",
//     ],
//   },
//   {
//     price: 99,
//     title: "Premium Plan",
//     description:
//       "Maximize your earnings with the ultimate driver experience. Get exclusive perks and VIP support for stress-free driving.",
//     features: [
//       "Advanced earning insights",
//       "VIP customer support",
//       "Lower service fees & premium features",
//     ],
//   },
// ];

// const plansDaily = [
//   {
//     price: 5,
//     title: "Daily Starter",
//     description:
//       "Get essential features to start earning quickly. Perfect for casual drivers.",
//     features: ["Ride requests", "Basic support", "Earnings dashboard"],
//   },
//   {
//     price: 9,
//     title: "Daily Pro (Popular)",
//     description:
//       "Better features for serious drivers including faster support and analytics.",
//     features: [
//       "Everything in Starter",
//       "Faster ride matching",
//       "Daily performance insights",
//     ],
//   },
//   {
//     price: 15,
//     title: "Daily Premium",
//     description:
//       "All the perks for top drivers. Enjoy lower fees, priority support and more.",
//     features: ["Priority ride matching", "Lower fees", "Premium driver perks"],
//   },
// ];

// const IOSSwitch = styled((props) => (
//   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
//   width: 42,
//   height: 26,
//   padding: 0,
//   "& .MuiSwitch-switchBase": {
//     padding: 0,
//     margin: 2,
//     transitionDuration: "300ms",
//     "&.Mui-checked": {
//       transform: "translateX(16px)",
//       color: "#FF8C00",
//       "& + .MuiSwitch-track": {
//         backgroundColor: "#F4F4F4",
//         opacity: 1,
//         border: 0,
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     boxSizing: "border-box",
//     width: 22,
//     height: 22,
//   },
//   "& .MuiSwitch-track": {
//     borderRadius: 13,
//     backgroundColor: "#E9E9EA",
//     opacity: 1,
//     transition: theme.transitions.create(["background-color"], {
//       duration: 500,
//     }),
//   },
// }));

// const Pricing = () => {
//   const [isMonthly, setIsMonthly] = useState(true);

//   const plans = isMonthly ? plansMonthly : plansDaily;

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "space-between",
//         height: "auto",
//         gap: { xs: 3, sm: 4, md: 4 },
//         marginY: { xs: "60px", sm: "80px", md: "120px" },
//       }}
//     >
//       <Box textAlign="center">
//         <Typography
//           sx={{
//             fontSize: { xs: "30px", sm: "36px", md: "40px" },
//             fontWeight: 700,
//             lineHeight: { xs: "4px", sm: "6px", md: "10px" },
//           }}
//         >
//           <span style={{ color: "#FF8C00" }}>Plans and Pricing</span>
//         </Typography>
//       </Box>

//       {/* Toggle Switch */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           gap: 2,
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         <Typography sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}>
//           Bill daily
//         </Typography>
//         <IOSSwitch
//           checked={isMonthly}
//           onChange={() => setIsMonthly((prev) => !prev)}
//         />
//         <Typography sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}>
//           Bill monthly
//         </Typography>
//       </Box>

//       {/* Pricing Cards */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={isMonthly ? "monthly" : "daily"}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           style={{
//             width: "100%",
//             display: "flex",
//             flexWrap: "wrap",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "32px",
//           }}
//         >
//           {plans.map((plan, index) => (
//             <Box
//               key={index}
//               sx={{
//                 borderRadius: "16px",
//                 textAlign: "left",
//                 height: "auto",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: 4,
//                 padding: 4,
//                 width: { xs: "100%", sm: "80%", md: "30%" },
//                 border:
//                   index === 1 ? "none" : "1px solid rgba(206, 206, 206, 1)",
//                 background: index === 1 ? "#FF8C00" : "#FFFFFF",
//                 color: index === 1 ? "#FFFFFF" : "#000",
//               }}
//             >
//               <Box sx={{ textAlign: "left", gap: 2 }}>
//                 <Typography
//                   sx={{
//                     fontSize: { xs: "32px", sm: "36px", md: "40px" },
//                     fontWeight: 600,
//                     lineHeight: { xs: "38px", sm: "42px", md: "44px" },
//                   }}
//                 >
//                   ${plan.price}{" "}
//                   <span
//                     style={{
//                       fontSize: "20px",
//                       fontWeight: 600,
//                       color: index === 1 ? "#FFFFFF" : "rgba(17, 17, 17, 0.5)",
//                     }}
//                   >
//                     /{isMonthly ? "month" : "day"}
//                   </span>
//                 </Typography>
//                 <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
//                   {plan.title}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: 500,
//                     color: index === 1 ? "#FFFFFF" : "rgba(17, 17, 17, 0.6)",
//                   }}
//                 >
//                   {plan.description}
//                 </Typography>
//               </Box>

//               <Divider sx={{ color: "#CECECE" }} />

//               <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
//                 {plan.features.map((feature, i) => (
//                   <Box
//                     key={i}
//                     sx={{ display: "flex", alignItems: "center", mb: 1 }}
//                   >
//                     <Box
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         borderRadius: "50%",
//                         background: index === 1 ? "#FFFFFF" : "#FF8C00",
//                         color: index === 1 ? "#FF8C00" : "#FFFFFF",
//                         width: "20px",
//                         height: "21px",
//                         p: 1,
//                         mr: 1.5,
//                       }}
//                     >
//                       <CheckIcon
//                         sx={{
//                           fontSize: "14px",
//                           color: index === 1 ? "#FF8C00" : "#FFFFFF",
//                         }}
//                       />
//                     </Box>

//                     <Typography
//                       sx={{
//                         fontSize: "16px",
//                         fontWeight: 500,
//                         color:
//                           index === 1 ? "#FFFFFF" : "rgba(17, 17, 17, 0.6)",
//                       }}
//                     >
//                       {feature}
//                     </Typography>
//                   </Box>
//                 ))}
//                 <Box>
//                   <Button
//                     variant="contained"
//                     sx={{
//                       width: "106px",
//                       background: index === 1 ? "#FFFFFF" : "#002652",
//                       color: index === 1 ? "#003366" : "#FFFFFF",
//                       marginTop: 2,
//                     }}
//                   >
//                     Choose
//                   </Button>
//                 </Box>
//               </Box>
//             </Box>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </Box>
//   );
// };

// export default Pricing;

import React, { useState } from "react";
import { Box, Divider, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/CheckCircleOutline";
import { AnimatePresence, motion } from "framer-motion";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#FF8C00",
      "& + .MuiSwitch-track": {
        backgroundColor: "#F4F4F4",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 13,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const dailyPlan = {
  title: "Daily Plan",
  description: "Perfect for flexible drivers who want day-to-day benefits.",
  features: [
    "Flexible schedule",
    "Instant ride access",
    "Basic support",
    "No long-term commitment",
  ],
};

const monthlyPlan = {
  title: "Monthly Plan",
  description: "Ideal for regular drivers with long-term benefits.",
  features: [
    "Save up to 30% with monthly billing",
    "Access all premium features",
    "Priority ride matching",
    "VIP customer support",
  ],
};

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const plan = isMonthly ? monthlyPlan : dailyPlan;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "auto",
        gap: { xs: 3, sm: 4, md: 4 },
        marginY: { xs: "60px", sm: "80px", md: "100px" },
        paddingX: 2,
      }}
    >
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "36px", md: "40px" },
            fontWeight: 700,
            lineHeight: { xs: "4px", sm: "6px", md: "10px" },
            color: "#002652",
          }}
        >
          <span style={{ color: "#FF8C00" }}>Plans and Pricing</span>
        </Typography>
      </Box>

      {/* Toggle Switch */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}>
          Bill daily
        </Typography>
        <IOSSwitch
          checked={isMonthly}
          onChange={() => setIsMonthly((prev) => !prev)}
        />
        <Typography sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}>
          Bill monthly
        </Typography>
      </Box>

      {/* Single Plan Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isMonthly ? "monthly" : "daily"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          <Box
            sx={{
              borderRadius: "16px",
              textAlign: "left",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              padding: 4,
              width: { xs: "100%", sm: "80%", md: "30%" },
              border: "1px solid rgba(206, 206, 206, 1)",
              background: "#FFFFFF",
              color: "#000",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              transition: "0.3s",
            }}
          >
            <Box sx={{ textAlign: "left", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "28px", md: "30px" },
                  fontWeight: 600,
                  lineHeight: { xs: "32px", sm: "36px", md: "40px" },
                  mb: 1,
                  color: "#002652",
                }}
              >
                {plan.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(17, 17, 17, 0.6)",
                }}
              >
                {plan.description}
              </Typography>
            </Box>

            <Divider sx={{ color: "#CECECE" }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {plan.features.map((feature, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 0.5,
                    gap: 1.5,
                  }}
                >
                  <CheckIcon sx={{ fontSize: "20px", color: "#FF8C00" }} />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(17, 17, 17, 0.8)",
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(17, 17, 17, 0.6)",
                  mt: 2,
                }}
              >
                Please reach out to us for more details at{" "}
                <a
                  href="mailto:sales@vegacab.com"
                  style={{
                    color: "#FF8C00",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  sales@vegacab.com
                </a>
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Pricing;
