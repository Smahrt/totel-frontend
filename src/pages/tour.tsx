import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@mui/material/Button';

import WrapHeader from 'components/WrapHeader';
import WrapFooter from 'components/WrapFooter';
import styles from 'styles/Home.module.css';

export default function Tour() {

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

	return (
		<div className={styles.container}>
			<Head>
				<title>Metoospace | Tours</title>
				<meta name="description" content="Best Spaces in the Universe." />
			</Head>

			<WrapHeader />

			<main className={styles.homemain}>

				<div className={styles.hometrip}>
					<div className={styles.hometriptext}>
						<h2>Trip Planner</h2>
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
						<Button
							variant="outlined"
							sx={{
								height: '48px',
								color: '#292D32',
								border: '1px solid #D9D9D9',
							}}>
							View All Hotels
						</Button>
					</div>
					{homeTrips.map((trip) => (
						<div className={styles.hometrippic} key={trip.id}>
							<Link href={`/trips/${trip.id}`}>
								<a>
									<Image
										src={trip.imgUrl}
										alt={trip.name}
										layout="responsive"
										width={302}
										height={450}
									/>
									<h3>{trip.name}</h3>
								</a>
							</Link>
						</div>
					))}
				</div>
				{/* END: <div className={styles.hometrip}> */}

			</main>

			<WrapFooter />
		</div>
	);
}
