import React from "react";
import { IconButton, Theme } from "@mui/material";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import AppScrollbar from "components/scrollbar";
import IntlMessages from "utils/IntlMessages";
import NotificationItem from "./app-notification-item";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import { useSelector } from "react-redux";
import { AppState } from "redux/store";

interface AppNotificationContentProps {
  onClose: () => void;
  sxStyle: SxProps<Theme>;
}

const AppNotificationContent: React.FC<AppNotificationContentProps> = ({
  onClose,
  sxStyle,
}) => {

	const { notifications }  = useSelector<AppState, AppState["appNotification"]>(({ appNotification }) => appNotification);

	if(notifications == null) {
		return null;
	}

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 280,
        height: "100%",
        ...sxStyle,
      }}
    >
      <Box
        sx={{
          padding: "5px 20px",
          display: "flex",
          alignItems: "center",
          borderBottom: 1,
          borderBottomColor: (theme) => theme.palette.divider,
          minHeight: { xs: 56, sm: 70 },
        }}
      	>
        <Typography component="h3">
          <IntlMessages id="common.notifications" />
        </Typography>
        <IconButton
          sx={{
            height: 40,
            width: 40,
            marginLeft: "auto",
            color: "text.secondary",
          }}
          onClick={onClose}
          size="large"
        	>
          <CancelOutlinedIcon />
        </IconButton>
      </Box>
      <AppScrollbar
        sx={{
          height: { xs: "calc(100% - 96px)", sm: "calc(100% - 110px)" },
        }}
      	>
        <List sx={{ py: 0 }}>
          {notifications.data.map((item) => (
            <NotificationItem key={item.id} item={item} />
          ))}
        </List>
      </AppScrollbar>
    </Box>
  );
};

export default AppNotificationContent;
