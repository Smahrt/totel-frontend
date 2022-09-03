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

export default function Room() {
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

	return (
		<div className={styles.container}>
			<Head>
				<title>Metoospace | Room</title>
				<meta name="description" content="Best Spaces in the Universe." />
			</Head>

			<WrapHeader />

			<main className={styles.homemain}>
				<div className={styles.homeroom}>
					<div className={styles.hhtop}>
						<div className={styles.hhtopleft}>
							<br />
							<h2>Rooms</h2>
							<p>Pick a room that suites your taste and budget.</p>
						</div>
						<div className={styles.hhtopright}>
							<Button
								variant="outlined"
								sx={{
									height: '48px',
									color: '#292D32',
									border: '1px solid #D9D9D9',
								}}>
								View All Rooms
							</Button>
						</div>
					</div>
					<div className={styles.hhpic}>
						{homeRooms.map((room, i) => (
							<Link href={`/rooms/${room.id}`} key={room.id}>
								<a>
									<Image
										src={room.imgUrl}
										alt={room.name}
										layout="responsive"
										width={410}
										height={i === 0 ? 500 : 238}
									/>
									<div className={styles.hhtitleprice}>
										<p>{room.price}</p>
										<h3>{room.name}</h3>
									</div>
								</a>
							</Link>
						))}
					</div>
				</div>
				{/* END: <div className={styles.homeroom}> */}
			</main>

			<WrapFooter />
		</div>
	);
}
