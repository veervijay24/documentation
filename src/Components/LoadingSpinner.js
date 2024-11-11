// LoadingSpinner.js

import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const LoadingSpinner = ({
  message = "Loading...",
  size = 40,
  color = "primary",
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
    >
      <CircularProgress size={size} color={color} />
      <Typography variant="subtitle1" mt={2} color="textSecondary">
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
