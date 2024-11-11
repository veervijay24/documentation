import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const data = {
  TenableVulnerabilityManagement: {
    category: "Dashboards",
    language: "English",
    description:
      "Dashboards are interactive, graphical interfaces that often provide at-a-glance views of key performance indicators (KPIs) relevant to a particular objective or business process.",
    dashboardTypes: [
      {
        type: "Tenable-provided dashboards",
        description:
          "For a complete index of Tenable-provided dashboard templates, see Tenable Vulnerability Management Dashboards.",
        note: "Depending on your license, more dashboards are included. For example, the Tenable Lumin dashboard.",
      },
      {
        type: "Dashboards you have created",
        description:
          "To create a template-based or custom dashboard with Tenable-provided or custom widgets, see Create a Dashboard.",
      },
      {
        type: "Dashboards shared with you",
        description:
          "Dashboards that other users have shared with you. Click the Shared with Me tab to view dashboards that others have shared with you.",
      },
    ],
    topics: [
      "Vulnerability Management Dashboard",
      "Vulnerability Management Overview (Explore)",
      "Web App Scanning Overview Dashboard",
      "View the Dashboards Page",
      "Create a Dashboard",
      "Enable Explore Dashboards",
      "Manage Dashboards",
      "Manage Widgets",
    ],
  },
};

const TenableDashboardInfo = () => {
  const { category, language, description, dashboardTypes, topics } =
    data.TenableVulnerabilityManagement;

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {category}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Language: {language}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>

      {/* Dashboard Types */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Dashboard Types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {dashboardTypes.map((dashboard, index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {dashboard.type}
              </Typography>
              <Typography variant="body2">{dashboard.description}</Typography>
              {dashboard.note && (
                <Typography variant="body2" color="textSecondary">
                  Note: {dashboard.note}
                </Typography>
              )}
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Topics */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Related Topics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {topics.map((topic, index) => (
              <ListItem key={index}>
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TenableDashboardInfo;
