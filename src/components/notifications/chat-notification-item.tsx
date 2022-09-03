import React from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box, ListItem, Typography } from "@mui/material";
import { Fonts } from "shared/constants/AppEnums";
// import { MessageDataObj } from "types/models-types/social.model";
// import { useAuthMethod, useAuthUser } from "utils/AuthHooks";
import { useDispatch, useSelector } from "react-redux";
// import { openUserChatBox } from "redux/actions";
// import { setShowNotification } from "redux/actions";

interface ChatNotificationItemProps {
  item: any;
	// item: MessageDataObj;
}

const ChatNotificationItem: React.FC<ChatNotificationItemProps> = ({ item }) => {
	const dispatch = useDispatch();
	// const { user } = useAuthUser();
	
  return (
    <ListItem
      sx={{
        padding: "8px 20px",
				cursor: "pointer",
      }}
      className="item-hover"
			onClick={() => {
				// dispatch(setShowNotification(false))
				// if(user.id == item.sender.id) {
				// 	dispatch(openUserChatBox(item.receiver))
				// }
				// else {
				// 	dispatch(openUserChatBox(item.sender))
				// }
			}}
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
          alt={item.sender.fullName}
					src={item.sender.profilePic ? item.sender.profilePic.url : "/assets/images/placeholder.jpg"}
        />
      </ListItemAvatar>
      {/* <Box
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
						{user.id == item.sender.id ? 
						item.receiver.fullName 
						: 
						item.sender.fullName
						}	
          </Box>
					<Box
            component="span"
            sx={{
              fontSize: 14,
              fontWeight: Fonts.MEDIUM,
              mb: 0.5,
              mr: 1,
              display: "flex",
            }}
          	>
						{user.id == item.sender.id ? "You: " : null}	
            {item.message}
          </Box>
        </Typography>
      </Box> */}
    </ListItem>
  );
};

export default ChatNotificationItem;
