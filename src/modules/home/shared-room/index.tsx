import React from "react";
import Button from "@mui/material/Button";
// import IntlMessages from "utils/IntlMessages";
import Box from "@mui/material/Box";
import { Fonts } from "shared/constants/AppEnums";
import AppCard from "components/card";
import FindHotel from "../find-hotel/find-hotel";
import Grid from "@mui/material/Grid";

// import { useIntl } from "react-intl";

interface SharedRoomProps {}

const SharedRoom: React.FC<SharedRoomProps> = () => {
  // const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{
        // height: 600,
        backgroundImage: `url(/assets/images/shared-room.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        color: "white",
        position: "relative",
        "&:before": {
          // content: '""',
          position: "absolute",
          left: "0",
          top: "0",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "block",
        },
        "& > *": {
          position: "relative",
        },
      }}
      titleStyle={{ color: "white" }}
      title="Shared Room"
    	>
      <Box
        sx={{
          display: "flex",
          // width: { xs: "100%", lg: "70%", xl: "50%" },
          // height: 1,
					// pt: 16,
					// pl: 15
        }}
      	>
				<Grid
					container
					spacing={12}
					>
					<Grid
						item
						xs={12}
						lg={6}
						>
						<Box
							sx={{
								pt: 15,
								pl: 18,
							}}						
							>							
							<Box
								component="h4"
								sx={{
									fontSize: 36,
									color: "#000",
									fontWeight: Fonts.REGULAR,
								}}
								>
								Find Best Deal with 
							</Box>
							<Box
								component="h4"
								sx={{
									fontSize: 40,
									color: "#000",
									fontWeight: Fonts.BOLD
								}}
								>
								Shared Room 
							</Box>
							<Box
								sx={{
									pt: 4,
									display: "flex",
									alignItems: "center",
								}}
								>
								<Button
									variant="contained"
									color="primary"
									sx={{
										fontWeight: Fonts.LIGHT,
										fontSize: 16,
										mr: 4,
										px: 20,
										py: 2.5,
										backgroundColor: "#f16466"
									}}
								>
									Try Now
								</Button>
							</Box>
						</Box>

					</Grid>
					<Grid
						item
						xs={12}
						lg={6}
						sx={{
							pt: 17,
						}}
						>
						<FindHotel/>		
					</Grid>
				</Grid>
			</Box>
    </AppCard>
  );
};

export default SharedRoom;
