import React, { useState, useEffect } from "react";
import { IconButton, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppNotificationContent from "./app-notification-content";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from '@mui/material/Badge';
import Image from 'next/image';
import { alpha } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getAppNotifications, updateNotificationsToRead } from "redux/actions";
import { AppState } from "redux/store";
import AppTooltip from "../tooltip";
import {
	AppNotificationsObj
} from "types/models-types/notification-model.types";


const BellIcon = (props) => {
  return (
    <Image
      src="/assets/icons/icon-bell.svg"
      alt="Bell Icon"
      width={120}
      height={120}
    />
  )
}

interface AppNotificationsProps {
  drawerPosition?: "left" | "top" | "right" | "bottom";
  tooltipPosition?:
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
  isMenu?: boolean;
  sxNotificationContentStyle?: SxProps<Theme>;
}

const AppNotifications: React.FC<AppNotificationsProps> = ({
  drawerPosition = "right",
  tooltipPosition = "bottom",
  isMenu = false,
  sxNotificationContentStyle = {},
}) => {
	const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState<boolean>(false);
	const { notifications }  = useSelector<AppState, AppState["appNotification"]>(({ appNotification }) => appNotification);

  return (
    <>
      {isMenu ? (
        <Box component="span" onClick={() => setShowNotification(true)}>
          Message
        </Box>
      ) : (
        <AppTooltip title="Notification" placement={tooltipPosition}>
          <IconButton
            className="icon-btn"
            sx={{
              borderRadius: "50%",
              width: 40,
              height: 40,
              color: (theme) => theme.palette.text.secondary,
              backgroundColor: (theme) => theme.palette.background.default,
              border: 1,
              borderColor: "transparent",
            }}
            onClick={() => {
							setShowNotification(true);
							// dispatch(updateNotificationsToRead())
						}}
            size="large"
          	>
						<BellIcon/>
						{/* {notifications != null ?
							<Badge badgeContent={notifications.data.filter(e => e.isRead === false).length} color="primary">
								<NotificationsNoneIcon color="action" />
							</Badge>
						: 
							<NotificationsNoneIcon color="action" />
						} */}
          </IconButton>
        </AppTooltip>
      )}

      <Drawer
        anchor={drawerPosition}
        open={showNotification}
        onClose={() => setShowNotification(false)}
      	>
        <AppNotificationContent
          sxStyle={sxNotificationContentStyle}
          onClose={() => setShowNotification(false)}
        />
      </Drawer>
    </>
  );
};

export default AppNotifications;
