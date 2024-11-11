// Welcome.js
import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, List, ListItem } from "@mui/material";
import LoadingSpinner from "../Components/LoadingSpinner";

const Welcome = () => {
  const [loading, setLoading] = useState(true); // Set to true initially to show spinner
  const [data, setData] = useState({}); // Initialize as null

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/api/welcome/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const dataa = await response.json();
        setData(dataa);
      } catch (err) {
        console.error("Fetch error:", err.message);
      } finally {
        setLoading(false); // Ensure this runs after data fetching or error
      }
    }

    fetchData();
  }, [useEffect]); // Empty dependency array to run only once after the component mounts

  return (
    <div className="p-0">
      {console.log("welcome data is", data)}
      {loading ? (
        <LoadingSpinner message="Please wait..." size={50} color="secondary" />
      ) : (
        <Box sx={{ padding: 3, marginTop: 0 }}>
          <Typography variant="h4" gutterBottom>
            {data.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom color="text.secondary">
            Last Updated: {data.lastUpdated}
          </Typography>

          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom>
              Overview
            </Typography>
            <Typography component={"p"}>{data.overview.description}</Typography>
            <Typography component={"p"}>
              <strong>Note:</strong> {data.overview.note}
            </Typography>
            <Typography component={"p"}>
              <strong>Tip:</strong> {data.overview.tip}
            </Typography>
            <Typography component={"p"}>
              {data.overview.additionalInfo}
            </Typography>
            <List>
              {data.overview.resources.map((resource, index) => (
                <ListItem key={index}>{resource}</ListItem>
              ))}
            </List>
          </Paper>

          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom>
              Tenable One
            </Typography>
            <Typography component={"p"}>
              {data.tenableOne.description}
            </Typography>
            <Typography component={"p"}>
              <strong>Tip:</strong> {data.tenableOne.tip}
            </Typography>
            <List>
              {data.tenableOne.capabilities.map((capability, index) => (
                <ListItem key={index}>{capability}</ListItem>
              ))}
            </List>
          </Paper>

          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom>
              Tenable Vulnerability Management
            </Typography>
            <Typography component={"p"}>
              {data.tenableVulnerabilityManagement.description}
            </Typography>
            <Typography component={"p"}>
              <strong>Deployment:</strong>{" "}
              {data.tenableVulnerabilityManagement.deployment}
            </Typography>
            <List>
              {data.tenableVulnerabilityManagement.features.map(
                (feature, index) => (
                  <ListItem key={index}>{feature}</ListItem>
                )
              )}
            </List>
          </Paper>
        </Box>
      )}
    </div>
  );
};

export default Welcome;
