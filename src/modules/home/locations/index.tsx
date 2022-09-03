import React from "react";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Box from "@mui/material/Box";
import { Fonts } from "shared/constants/AppEnums";
import AppCard from "components/card";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

interface LocationsProps {
	data: any
}

const Locations: React.FC<LocationsProps> = ({ data }) => {
	console.log('data ', data)

  return (
    <AppCard
      // sxStyle={{
      //   height: 1,
      //   display: "flex",
      //   flexDirection: "column",
      // }}
      contentStyle={{ padding: 0 }}
    	>
      <Box
        sx={{
          position: "relative",
          flex: 1,
          display: "flex",
          "& .widthFull": {
            width: "100%",
          },
        }}
      	>
        <img
          className="widthFull"
          src={data.src}
          alt="location"
        />
      </Box>
    </AppCard>
  );
};

export default Locations;
