import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Sidebar = () => {
  const [error, setError] = useState(null);
  const [welcome, setWelcome] = useState([]);
  const navigate = useNavigate(); // Correctly call the useNavigate hook
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3001/api/data/");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setWelcome(data);
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError("Failed to load data. Please try again later.");
      }
    }
    fetchData();
    setLoading(false);
  }, []);

  const [expanded, setExpanded] = useState({});

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handleAccordionToggle = (panel) => {
    setExpanded((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }));
  };

  const clickHandler = (item) => {
    console.log("the set item is", item);
  };

  if (!isLargeScreen) return null;

  return (
    <div className="sidebar1 mt-32 ">
      <Box sx={{ width: 310, padding: 2 }}>
        {welcome.map((section, sectionIndex) => (
          <Accordion
            key={sectionIndex}
            expanded={!!expanded[`section${sectionIndex}`]}
            onChange={() => handleAccordionToggle(`section${sectionIndex}`)}
          >
            <AccordionSummary
              expandIcon={
                expanded[`section${sectionIndex}`] ? (
                  <ArrowDropDownIcon />
                ) : (
                  <ArrowRightIcon />
                )
              }
            >
              <Typography
                color="text.primary"
                onClick={() => clickHandler(section)} // Ensure clickHandler is not immediately called
              >
                {section.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {section.subheadings.map((subheading, subheadingIndex) => (
                  <ListItem
                    button="true" // Use button prop without an explicit value
                    key={subheadingIndex}
                    component={NavLink}
                    to={subheading.route}
                  >
                    <ListItemText
                      sx={{ cursor: "pointer" }}
                      primary={subheading.title}
                      primaryTypographyProps={{ color: "text.primary" }}
                      onClick={() => navigate(subheading.route)}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </div>
  );
};

export default Sidebar;
