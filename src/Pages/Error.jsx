import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{ zIndex: 1000 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor={theme.palette.background.default}
      color={theme.palette.text.primary}
      p={3}
    >
      <Typography variant="h1" color="primary" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        Oops! Page not found
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        align="center"
        maxWidth="400px"
        mb={3}
      >
        Sorry, the page you’re looking for doesn’t exist. You may have mistyped
        the address or the page may have moved.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleBackHome}
        sx={{ cursor: "pointer" }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default Error;
