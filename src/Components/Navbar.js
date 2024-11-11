import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ setSelectedItem }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const dropdownOptions = [
    {
      label: "Product Documentation",
      id: 1,
      options: [
        { name: "Tenable One Platform", route: "/demo", id: 5 },
        { name: "Option 2", route: "/option-2", id: 6 },
        { name: "Option 3", route: "/option-3", id: 7 },
      ],
    },
    {
      label: "Developer Resources",
      id: 2,
      options: [
        { name: "Tenable One Platform", route: "/tenable-one", id: 8 },
        { name: "Option 2", route: "/option-2", id: 9 },
        { name: "Option 3", route: "/option-3", id: 10 },
      ],
    },
    {
      label: "Customer Resources",
      id: 3,
      options: [
        { name: "Tenable One Platform", route: "/tenable-one", id: 11 },
        { name: "Option 2", route: "/option-2", id: 12 },
        { name: "Option 3", route: "/option-3", id: 13 },
      ],
    },
    {
      label: "Legal",
      id: 4,
      options: [
        { name: "Tenable One Platform", route: "/tenable-one", id: 14 },
        { name: "Option 2", route: "/option-2", id: 15 },
        { name: "Option 3", route: "/option-3", id: 16 },
      ],
    },
  ];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

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
  const navigate = new useNavigate();
  const [welcome, setWelcome] = useState([]);
  const [expanded, setExpanded] = useState({});
  const handleAccordionToggle = (panel) => {
    setExpanded((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }));
  };
  const clickHandler = (item) => {
    console.log("the set item is", item);
  };
  return (
    <div className="fixed w-full">
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left side: Logo and Text */}
          <Box display="flex" alignItems="center">
            <IconButton
              onClick={() => {
                navigate("/");
              }}
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ mr: 1 }}
            >
              <AccountCircleIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" noWrap>
              Documentation
            </Typography>
          </Box>

          {/* Center-aligned Dropdown Menus - only visible on large screens */}
          <Box
            display={{ xs: "none", lg: "flex" }}
            justifyContent="center"
            flexGrow={1}
            gap={2}
          >
            {dropdownOptions.map((menu) => (
              <Box
                key={menu.id}
                sx={{
                  position: "relative",
                  "&:hover .dropdown-menu": {
                    display: "block",
                  },
                }}
              >
                <Button color="inherit" endIcon={<ArrowDropDownIcon />}>
                  {menu.label}
                </Button>
                <Box
                  className="dropdown-menu"
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: "background.paper",
                    boxShadow: 3,
                    zIndex: 1000,
                  }}
                >
                  {menu.options.map((option) => (
                    <NavLink
                      key={option.id}
                      to={option.route}
                      style={({ isActive }) => ({
                        color: isActive ? "blue" : "gray",
                      })}
                    >
                      <MenuItem>{option.name}</MenuItem>
                    </NavLink>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Hamburger Menu Icon for small screens */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { lg: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Drawer for Sidebar on small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
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
      </Drawer>
    </div>
  );
};

export default Navbar;
