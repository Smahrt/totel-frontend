import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';

import WrapHeader from 'components/WrapHeader';
import WrapFooter from 'components/WrapFooter';
import styles from 'styles/Home.module.css';

// BEGIN: Quick search Tabs of Hostels / Rooms / Tours
function TabPanel(props) {
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && <>{children}</>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
// END: Quick search Tabs of Hostels / Rooms / Tours

export default function Support() {
	// BEGIN: Quick search Tabs of Hostels / Rooms / Tours
	const [quickTabValue, setQuickTabValue] = React.useState(0);

	const handleChangeQuickTab = (event, newValue) => {
		setQuickTabValue(newValue);
	};
	// END: Quick search Tabs of Hostels / Rooms / Tours

	// BEGIN: hotel & Hostels
	const homeHotels = [
		{
			id: '1',
			name: 'Radisson Blu Hotel',
			price: '$78 per night',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
		{
			id: '2',
			name: 'Gevora Hotel',
			price: '$333 per night',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
		{
			id: '3',
			name: 'Golden Sands Hotel',
			price: '$501 per night',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
		{
			id: '4',
			name: '25Hours Hotel',
			price: '$412 per night',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
		{
			id: '5',
			name: 'City Seasons Tower',
			price: '$257 per night',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
	];
	// END: hotel & Hostels
	// BEGIN: Rooms
	const homeRooms = [
		{
			id: '1',
			name: 'Delux room',
			price: '$78 per night',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
		{
			id: '2',
			name: 'Delux room',
			price: '$333 per night',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
		{
			id: '3',
			name: 'Delux room',
			price: '$501 per night',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
		{
			id: '4',
			name: 'Delux room',
			price: '$412 per night',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
		{
			id: '5',
			name: 'Delux room',
			price: '$257 per night',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
	];
	// END: Rooms

	// BEGIN: Trip Planner
	const homeTrips = [
		{
			id: '1',
			name: 'New york',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
		{
			id: '2',
			name: 'Madrid',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
		{
			id: '3',
			name: 'Dubai',
			imgUrl:
				'https://github.com/ehsanpaknejad/public/blob/main/20220602_homehotels.png?raw=true',
		},
	];
	// END: Trip Planner

	// BEGIN: News Letter
	const [newsLetter, setNewsLetter] = useState('');
	// END: News Letter

	return (
		<div className={styles.container}>
			<Head>
				<title>Metoospace | Support</title>
				<meta name="description" content="Best Spaces in the Universe." />
			</Head>

			<WrapHeader />

			<main className={styles.homemain}>
				<div className={styles.hometrip}>
					<div className={styles.hometriptext}>
						<h2>Support</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
							purus viverra accumsan in nisl nisi Arcu cursus vitae congue
							mauris rhoncus aenean vel elit scelerisque In egestas erat
							imperdiet sed euismod nisi porta lorem mollis Morbi tristique
							senectus et netus Mattis pellentesque id nibh tortor id aliquet
							lectus proin Sapien faucibus et molestie ac feugiat sed lectus
							vestibulum Ullamcorper velit sed ullamcorper morbi tincidunt
							ornare massa eget.
						</p>

					</div>
				</div>
				{/* END: <div className={styles.hometrip}> */}
			</main>

			<WrapFooter />
		</div>
	);
}
