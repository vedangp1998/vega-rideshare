import React, { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  TextField,
  Icon,
} from "@mui/material";
import { MessageSquare, User } from "lucide-react";

const recentComments = [
  {
    id: 1,
    name: "Robert K.",
    timeAgo: "2 days ago",
    content:
      "The emergency button feature is impressive. Had a minor issue during a ride and the support team responded instantly. Great safety focus!",
  },
  {
    id: 2,
    name: "Jessica T.",
    timeAgo: "1 week ago",
    content:
      "I've been using VEGA for my daily commute and have saved so much money compared to other rideshare apps. The drivers are always on time and professional.",
  },
  {
    id: 3,
    name: "Michael W.",
    timeAgo: "2 weeks ago",
    content:
      "As a driver, I'm earning much more with VEGA than I did with other platforms. The subscription model really works in my favor since I drive full-time.",
  },
];

const CommentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        mt: 6,
      }}
      id="contact-us"
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: "32px",
          }}
        >
          {/* Comment Form */}
          <Card
            sx={{
              backgroundColor: "#1a1f2c",
              border: "1px solid #334155",
              borderRadius: "12px",
              textAlign: "left",
              p: 1.5,
            }}
          >
            <CardHeader
              title={
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Icon>
                    <MessageSquare
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#FFFFFF",
                      }}
                    />
                  </Icon>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                    }}
                  >
                    Share Your Experience
                  </Typography>
                </Box>
              }
            />
            <CardContent>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <Typography sx={{ color: "#D1D5DB", fontSize: "0.875rem" }}>
                    Name
                  </Typography>
                  <TextField
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#334155", // slate-700
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#475569" }, // slate-600
                        "&:hover fieldset": { borderColor: "#475569" },
                        "&.Mui-focused fieldset": { borderColor: "#475569" },
                        "& input": { color: "#FFFFFF", fontSize: "1rem" },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#9CA3AF", // gray-400
                        opacity: 1,
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <Typography sx={{ color: "#D1D5DB", fontSize: "0.875rem" }}>
                    Email
                  </Typography>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#334155",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#475569" },
                        "&:hover fieldset": { borderColor: "#475569" },
                        "&.Mui-focused fieldset": { borderColor: "#475569" },
                        "& input": { color: "#FFFFFF", fontSize: "1rem" },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#9CA3AF",
                        opacity: 1,
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <Typography sx={{ color: "#D1D5DB", fontSize: "0.875rem" }}>
                    Your Comment
                  </Typography>
                  <TextField
                    id="comment"
                    name="comment"
                    multiline
                    rows={6}
                    placeholder="Share your experience with VEGA Rideshare..."
                    value={formData.comment}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#334155",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#475569" },
                        "&:hover fieldset": { borderColor: "#475569" },
                        "&.Mui-focused fieldset": { borderColor: "#475569" },
                        "& textarea": { color: "#FFFFFF", fontSize: "1rem" },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#9CA3AF",
                        opacity: 1,
                      },
                    }}
                  />
                </Box>

                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#FF8C00",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    textTransform: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    transition:
                      "background-color 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e67600",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    },
                    "&:active": {
                      backgroundColor: "#cc6600",
                    },
                  }}
                >
                  Submit Comment
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Recent Comments */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              gap: "16px",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827" }}
            >
              Recent Comments
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {recentComments.map((comment) => (
                <Card
                  key={comment.id}
                  sx={{
                    border: "1px solid #E5E7EB",
                    borderRadius: "12px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                    transition:
                      "box-shadow 0.2s ease-in-out, transform 0.2s ease",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          backgroundColor: "#FFF7ED", // lighter orange
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon>
                          <User
                            style={{ width: 22, height: 22, color: "#FF8C00" }}
                          />
                        </Icon>
                      </Box>

                      <Box
                        sx={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.5,
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 600,
                              color: "#111827",
                              fontSize: "1rem",
                            }}
                          >
                            {comment.name}
                          </Typography>
                          <Typography
                            sx={{ fontSize: "0.875rem", color: "#9CA3AF" }}
                          >
                            {comment.timeAgo}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "0.95rem",
                            color: "#4B5563",
                            lineHeight: 1.6,
                          }}
                        >
                          {comment.content}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentSection;
