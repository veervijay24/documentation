import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

import "./App.css";
import SearchComponent from "./Components/SearchComponent";
import Error from "./Pages/Error";
import Welcome from "./Pages/Welcome";
import LoadingSpinner from "./Components/LoadingSpinner";
import ReleaseNotes from "./Pages/ReleaseNotes";
import VulnerabilityManagement from "./Pages/VulnerabilityManagement";
import SensorProxy from "./Pages/SensonProxyUserGuide";
import ErrorMessages from "./Pages/ErrorMessages";
import TenableDashboardInfo from "./Pages/TenableDashboardInfo";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter future={{ v7_startTransition: true }}>
        <div className="app-container1">
          <div>
            {loading ? (
              <LoadingSpinner
                message="Please wait..."
                size={50}
                color="secondary"
              />
            ) : (
              <div>
                <div className="fixed z-50">
                  <Navbar />
                  <SearchComponent />
                </div>
                <div className="content-container1">
                  <Sidebar setLoading={setLoading} />
                  <div className="main-content1">
                    <Routes>
                      <Route path="/" element={<Welcome />} />
                      <Route path="*" element={<Error />} />
                      <Route path="/welcome" element={<Welcome />} />
                      <Route path="/release-notes" element={<ReleaseNotes />} />
                      <Route
                        path="/dashboards"
                        element={<TenableDashboardInfo />}
                      />
                      <Route
                        path="/sensore-proxy-user-guide"
                        element={<SensorProxy />}
                      />
                      <Route
                        path="/error-messages"
                        element={<ErrorMessages />}
                      />
                    </Routes>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* </div> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
