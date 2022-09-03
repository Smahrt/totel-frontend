import React from "react";
import Card from "@mui/material/Card";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";
import { Fonts } from "shared/constants/AppEnums";
import { useDispatch } from "react-redux";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useRouter } from "next/router";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  normaltext: {
		color: "#524d4d",
		marginTop: '10px',
		marginBottom: '2px',
		// mb: { xs: 4, sm: 4, xl: 6 },
		fontSize: 18,
		fontWeight: Fonts.REGULAR,
  },	
  absolutetext: {
		position: 'absolute',
		bottom: '13px',
		left: '14px',
		color: '#fff',
		fontWeight: Fonts.BOLD
  },
});

interface GridItemProps {
  item: any;
	textStyle: string;
}

const LocationGridItem: React.FC<GridItemProps> = ({ item, textStyle }) => {
  const dispatch = useDispatch();
  const router = useRouter();
	const classes = useStyles();

	console.log('textStyle ', textStyle);

  return (
		<Box 
			sx={{ position: 'relative' }}>
			<Card
				sx={{
					borderRadius: '5px',
					cursor: "pointer",
					// width: "100%",
					height: "210px",
					display: "flex",
					flexDirection: "column",
				}}
				>
				<img 
					src={item.src != '' ? item.src : "/img/no-image.jpg"} 
					alt="Image" 
					width="auto"
					height="100%"/>
			</Card>

			<Box>			
				<Box
					component="h3"
					className={textStyle == 'normal' ? classes.normaltext : classes.absolutetext }
					>
					{item.label}
				</Box>	
			</Box>		
		</Box>
  );
};

export default LocationGridItem;
