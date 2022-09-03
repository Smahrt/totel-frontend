import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';

import styles from 'styles/WrapHeader.module.css';
import { Store } from 'utils/StoreUtils/Store.js';
import HomeLocation from './HomeLocation';

const WrapHeaderTopLinks = dynamic(
	() => import('components/WrapHeaderTopLinks'),
	{ ssr: false }
)
const VerifyWarning = dynamic(
	() => import('./VerifyWarning'),
	{ ssr: false }
)

const WrapHeader = () => {
	const router = useRouter();
	const [searchValue, setSearchValue] = useState('');
	const { state, dispatch } = useContext(Store);

	// BEGIN: Nav menu
	const navMenuData = [
		'/',
		'/destination',
		'/tours',
		'/rooms',
		'/hostels',
		'/blogs',
	];
	let navMenuValue = navMenuData.indexOf(router.pathname);
	if (navMenuValue === -1) {
		navMenuValue = false;
	}
	// END: Nav Menu

	return (
		<div className={styles.wrapheader}>
			<VerifyWarning />
			<div className={styles.topheader}>
				<div className={styles.topleft}>
					<h1 className={styles.sitelogo} href={'/'}>
						<Image src="/img/logo.png" alt="logo" width={117} height={40} />
					</h1>
					<div className={styles.location}>
						<HomeLocation whichComponent="WrapHeader" />
					</div>
				</div>
				{/* END: <div className={styles.topleft}> */}

				<div className={styles.toprightlinks}>
					<WrapHeaderTopLinks />
				</div>
				{/* END div.toprightlinks */}
			</div>
		</div>
	);
};

export default WrapHeader;
