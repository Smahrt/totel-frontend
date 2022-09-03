import React from "react";
import Zoom from "@mui/material/Zoom";

import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { lighten } from "@mui/material";
import styled from "@emotion/styled";
import { AppTheme } from "types/app-context-props-type";
import { useTheme } from "@mui/styles";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }: { theme: AppTheme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: lighten(theme.palette.background.default, 0.25),
    "&:before": {
      boxShadow: theme.shadows[1],
    },
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: lighten(theme.palette.background.default, 0.25),
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

interface AppTooltipProps {
  title: any;
	enterDelay?: number;
	enterNextDelay?: number;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  children: React.ReactElement<any, any>;
}

const AppTooltip: React.FC<AppTooltipProps> = ({
  title,
  placement = "top",
  children,
	enterDelay = 100,
	enterNextDelay = 100,
}) => {
  // @ts-ignore
  const { theme } = useTheme();
  return (
    <LightTooltip
      title={title}
      TransitionComponent={Zoom}
      placement={placement}
      arrow
      theme={theme}
			enterDelay={enterDelay}
			enterNextDelay={enterNextDelay}
    >
      {children}
    </LightTooltip>
  );
};
export default AppTooltip;
