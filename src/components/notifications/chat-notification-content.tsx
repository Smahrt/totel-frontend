import React from "react";
import { IconButton, Theme } from "@mui/material";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import AppScrollbar from "components/scrollbar";
import IntlMessages from "utils/IntlMessages";
import ChatNotificationItem from "./chat-notification-item";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
// import { openNewChatBox } from "redux/actions";
import NoteEdit from '../../assets/icon/note-edit.svg';

interface ChatNotificationContentProps {
  onClose: () => void;
  sxStyle: SxProps<Theme>;
	notifications: any;
}

const ChatNotificationContent: React.FC<ChatNotificationContentProps> = ({
  onClose,
  sxStyle,
	notifications
}) => {
	const dispatch = useDispatch();

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
          <IntlMessages id="common.messages" />
					{/* ({notifications.data.length}) */}
        </Typography>
        <IconButton
          sx={{
            height: 40,
            width: 40,
            marginLeft: "auto",
            color: "text.secondary",
          }}
					// onClick={() => dispatch(openNewChatBox(true)) }
          size="large"
        	>
          <DriveFileRenameOutlineIcon/>
        </IconButton>				
        <IconButton
          sx={{
            height: 40,
            width: 40,
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
            <ChatNotificationItem key={item.id} item={item} />
          ))}
        </List>
      </AppScrollbar>
    </Box>
  );
};

export default ChatNotificationContent;
