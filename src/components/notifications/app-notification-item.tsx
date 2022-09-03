import React from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box, ListItem, Typography } from "@mui/material";
import { Fonts } from "shared/constants/AppEnums";
import {
	AppNotificationDataObj
} from "types/models-types/notification-model.types";

interface NotificationItemProps {
  item: AppNotificationDataObj;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ item }) => {
  return (
    <ListItem
      sx={{
        padding: "8px 20px",
				cursor: "pointer",
      }}
      className="item-hover"
    	>
      <ListItemAvatar
        sx={{
          minWidth: 0,
          mr: 4,
        }}
      	>
        <Avatar
          sx={{
            width: 48,
            height: 48,
          }}
          alt={item.notification.sender.fullName}
					src={item.notification.sender.profilePic ? item.notification.sender.profilePic.url : "/assets/images/placeholder.jpg"}
        />
      </ListItemAvatar>
      <Box
        sx={{
          fontSize: 14,
          color: (theme) => theme.palette.text.secondary,
        }}
      	>
        <Typography>
          <Box
            component="span"
            sx={{
              fontSize: 14,
              fontWeight: Fonts.MEDIUM,
              mb: 0.5,
              color: (theme) => theme.palette.text.primary,
              mr: 1,
              display: "inline-block",
            }}
          	>
            {item.notification.sender.fullName}
          </Box>
          {item.notification.description}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default NotificationItem;
