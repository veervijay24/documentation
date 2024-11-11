import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <div className="main-content2">
      <Box>
        <div className="main-content1">
          <Outlet />
        </div>
      </Box>
    </div>
  );
}

export default MainContent;
