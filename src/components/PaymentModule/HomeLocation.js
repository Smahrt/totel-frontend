import React, { useState } from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import iconArrowDown from '../../../public/img/icon/icon-arrow-down.svg';
import iconLocation from '../../../public/img/icon/icon-location.svg';
import iconDate from '../../../public/img/icon/icon-date.svg';
import iconFile from '../../../public/img/icon/icon-file.svg';
import iconBuilding from '../../../public/img/icon/icon-building.svg';
import iconUser from '../../../public/img/icon/icon-user.svg';

import styles from '../../styles/HomeLocation.module.css';

const HomeLocation = ({ whichComponent }) => {
	const WrapHeaderComponent = whichComponent === 'WrapHeader'; // WrapHeaderComponent is true if HomeLocation is in WrapHeader.js and is false if HomeLocation is in WrapFooter.js


	// BEGIN CODE: Location in top right: open/close effect
	const [anchorElLocation, setAnchorElLocation] = useState(null);
	const [locationUnit, setLocationUnit] = useState('Miami,Florida');

	const [locations, setLocations] = useState([
		{ key: 'miami', name: 'Miami,Florida' },
		{ key: 'new-york', name: 'New York' },
		{ key: 'califonia', name: 'Califonia' },
	]);
	
	const openLocation = Boolean(anchorElLocation);
	const handleClickLocation = (e) => {
		console.log(e.currentTarget)
		setAnchorElLocation(e.currentTarget);
	};

	const handleCloseLocation = () => {
		setAnchorElLocation(null);
	};
	// END CODE: Location in top right: open/close effect

	const handleChangeLocation = (location) => {
		setLocationUnit(location.name)
	};

	// BEGIN CODE: TEST DATA
	const ratingUnit = 'Rating 4.0 +';
	// END CODE: TEST DATA

	return (
		<div className={styles.location}>
			{/* BEGIN CODE: Location in top right: open/close effect */}
			<div className={styles.location}>
				<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
					<Tooltip title="Location">
						<Button
							id="basic-button"
							onClick={handleClickLocation}
							aria-controls={openLocation ? 'account-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={openLocation ? 'true' : undefined}
							style={{
								color: WrapHeaderComponent ? '#000' : '#fff',
								fontSize: '0.98em',
								textTransform: 'none',
							}}
							startIcon={<Image src={iconLocation} alt="Location icon" />}
							endIcon={<Image src={iconArrowDown} alt="Arrow Down icon" />}>
							{locationUnit}
						</Button>
					</Tooltip>
				</Box>
				<Menu
					anchorEl={anchorElLocation}
					id="account-menu"
					open={openLocation}
					onClose={handleCloseLocation}
					onClick={handleCloseLocation}
					transformOrigin={{
						horizontal: 'right',
						vertical: WrapHeaderComponent ? 'top' : 'bottom',
					}}
					anchorOrigin={{
						horizontal: 'right',
						vertical: WrapHeaderComponent ? 'bottom' : 'top',
					}}>
						{locations.map((location, index) => (
							<MenuItem key={index} onClick={() => handleChangeLocation(location)}>
								<Box
									sx={{
										width: 160,
									}}
								>
								{location.name}
								</Box>
							</MenuItem>
						))}				
				</Menu>
			</div>
			{/* END CODE: Location in top right: open/close effect */}

			{/* row of filter buttons */}
			<div className={styles.filter}>
				<Button
					id="basic-button"
					style={{
						color: WrapHeaderComponent ? '#696888' : '#fff',
						fontSize: '0.98em',
						textTransform: 'none',
					}}
					startIcon={<Image src={iconDate} alt="Date icon" />}>
					Date
				</Button>
				<Button
					id="basic-button"
					style={{
						color: WrapHeaderComponent ? '#696888' : '#fff',
						fontSize: '0.98em',
						textTransform: 'none',
					}}
					startIcon={<Image src={iconUser} alt="User icon" />}>
					{ratingUnit}
				</Button>
				<Button
					id="basic-button"
					style={{
						color: WrapHeaderComponent ? '#696888' : '#fff',
						fontSize: '0.98em',
						textTransform: 'none',
					}}
					startIcon={<Image src={iconBuilding} alt="Building icon" />}>
					Booking Status
				</Button>
				<Button
					id="basic-button"
					style={{
						color: WrapHeaderComponent ? '#696888' : '#fff',
						fontSize: '0.98em',
						textTransform: 'none',
					}}
					startIcon={<Image src={iconFile} alt="File icon" />}>
					Budget
				</Button>
			</div>
			{/* end row of filter buttons */}

		</div>
	);
};

export default HomeLocation;
