import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = () => {
  return (
    <div className="fixed w-full mt-16 -z-20">
      <Box
        sx={{
          width: "100%",
          bgcolor: "#041E42",
          py: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="What are you looking for?"
          sx={{
            width: "60%",
            bgcolor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              height: "36px",
              "& fieldset": {
                borderColor: "lightgray",
              },
              "&:hover fieldset": {
                borderColor: "gray",
              },
              "&.Mui-focused fieldset": {
                borderColor: "lightgray",
              },
            },
          }}
          InputProps={{
            sx: {
              color: "black",
            },
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: "gray", cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
};

export default SearchComponent;
