import React, { useState } from "react";
import { IconButton, Theme } from "@mui/material";
import AppTooltip from "../tooltip";
import Image from 'next/image';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Drawer from "@mui/material/Drawer";
import AppMessageContent from "./chat-content";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";

// import iconLogout from '../../public/img/icon/icon-logout.svg';
// import iconArrowDown from '../../public/img/icon/icon-arrow-down.svg';
// import iconPlus from '../../public/img/icon/icon-plus.svg';
// import iconBell from '../../public/img/icon/icon-bell.svg';
// import IconMessage from '../../../public/assets/icons/icon-chat.svg';

const ChatIcon = (props) => {
  return (
    <Image
      src="/assets/icons/icon-chat.svg"
      alt="Chat Icon"
      width={120}
      height={120}
    />
  )
}

interface AppMessagesProps {
  sxMessageContentStyle?: SxProps<Theme>;
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
}

const AppMessages: React.FC<AppMessagesProps> = ({
  drawerPosition = "right",
  tooltipPosition = "bottom",
  isMenu = false,
  sxMessageContentStyle = {},
}) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  return (
    <>
      {isMenu ? (
        <Box component="span" onClick={() => setShowMessage(true)}>
          Message
        </Box>
      ) : (
        <AppTooltip title="Chat" placement={tooltipPosition}>
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
            onClick={() => setShowMessage(true)}
            size="large"
          >
						<ChatIcon/>
            {/* <Image src={IconMessage} alt="Message icon" /> */}
          </IconButton>
        </AppTooltip>
      )}

      <Drawer
        anchor={drawerPosition}
        open={showMessage}
        onClose={() => setShowMessage(false)}
      >
        <AppMessageContent
          sxStyle={sxMessageContentStyle}
          onClose={() => setShowMessage(false)}
        />
      </Drawer>
    </>
  );
};

export default AppMessages;
