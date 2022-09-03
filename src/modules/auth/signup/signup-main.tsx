import React from "react";
import Box from "@mui/material/Box";
import AuthWrapper from "../auth-wrapper";
import SignupFirebase from "./signup-firebase";
import AppLogo from "components/logo";

const Signup = () => {
  return (
    <AuthWrapper>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ mb: { xs: 6, xl: 8 } }}>
          <Box
            sx={{
              mb: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <AppLogo />
          </Box>
        </Box>
        <SignupFirebase />
      </Box>
    </AuthWrapper>
  );
};

export default Signup;
