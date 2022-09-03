import React, { ReactNode } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from "prop-types";
import { useAuthUser } from "./AuthHooks";

interface AuthRoutesProps {
  children: ReactNode;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ children }) => {
  const { isLoading } = useAuthUser();
  return isLoading ? <CircularProgress /> : <>{children}</>;
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
