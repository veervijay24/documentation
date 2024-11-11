import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Example JSON data
const releaseNotes = {
  releaseNotes: {
    2024: [],
    2023: [],
    2022: {
      December: [],
      November: [],
      October: [],
      September: [],
      August: [],
      July: [],
      June: [],
      May: [],
      April: [],
      March: [],
      February: [],
      January: [],
    },
    2021: {
      December: [],
      November: [],
      October: [],
      September: [],
      August: [],
      July: [],
      June: [],
      May: [],
      "WAS Scanner 1.13.x": [],
      April: [],
      "WAS Scanner 1.12.x": [],
      "WAS Scanner 1.11.x": [],
      March: [],
      "WAS Scanner 1.10.x": [],
      February: [],
      January: [],
    },
    2020: {
      "WAS Scanner 1.9.x": [],
      December: [],
      "WAS Scanner 1.8.x": [],
      "WAS Scanner 1.7.x": [],
      November: [],
      October: [],
      "WAS Scanner 1.6.x": [],
      September: [],
      August: [],
      July: [],
      "Tenable.io MSSP Portal 1.1": [],
      June: [],
      May: [],
      "Tenable.io MSSP Portal 1.0": [],
      April: [],
      March: [],
      February: [],
      January: [],
    },
    2019: {
      December: [],
      November: [],
      October: [],
      September: [],
      August: [],
      July: [],
      June: [],
      May: [],
      April: [],
      March: [],
      February: [],
      January: [],
    },
    2018: {
      December: [],
      November: [],
      October: [],
      September: [],
      August: [],
      July: [],
      June: [],
      May: [],
      April: [],
      March: [],
      February: [],
      January: [],
    },
    2017: {
      December: [],
      November: [],
      October: [],
      September: [],
    },
  },
};

const theme = createTheme({
  palette: {
    mode: "dark", // Set dark theme
  },
});

const ReleaseNotes = () => {
  const [data, setData] = useState(releaseNotes.releaseNotes);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Tenable Vulnerability Management Release Notes
        </Typography>

        {Object.keys(data).map((year) => (
          <Paper key={year} sx={{ padding: 2, marginBottom: 3 }}>
            <Typography variant="h5" gutterBottom color="secondary">
              {year}
            </Typography>
            <List>
              {Object.keys(data[year]).map((monthOrVersion) => (
                <ListItem key={monthOrVersion}>
                  <Typography component="p" variant="body1">
                    {monthOrVersion}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default ReleaseNotes;
