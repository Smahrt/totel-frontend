import React, { ReactNode } from "react";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@mui/material";
import { AppTheme } from "types/app-context-props-type";

interface AppGridContainerProps {
  children: ReactNode;

  [x: string]: any;
}

const AppGridContainer: React.FC<AppGridContainerProps> = ({
  children,
  ...others
}) => {
  const isMDDown = useMediaQuery((theme: AppTheme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Grid container spacing={isMDDown ? 5 : 8} {...others}>
      {children}
    </Grid>
  );
};

export default AppGridContainer;
