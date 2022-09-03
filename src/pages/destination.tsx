import React, {useState} from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

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

export default function Destination() {
	// BEGIN: Quick search Tabs of Hostels / Rooms / Tours
	const [quickTabValue, setQuickTabValue] = React.useState(0);

	const handleChangeQuickTab = (event, newValue) => {
		setQuickTabValue(newValue);
	};
	// END: Quick search Tabs of Hostels / Rooms / Tours

	return (
		<div className={styles.container}>
			<Head>
				<title>Metoospace | Destination</title>
				<meta name="description" content="Best Spaces in the Universe." />
			</Head>

			<WrapHeader />

			<main className={styles.homemain}>
				<div className={styles.wrapquicksearch}>
					<div className={styles.quicksearch}>
						<div className={styles.quicksearchtabs}>
							<Tabs
								value={quickTabValue}
								onChange={handleChangeQuickTab}
								aria-label="basic tabs"
								TabIndicatorProps={{style: {background: '#fff'}}}>
								{quickTabValue === 0 ? (
									<Tab label="Hostels" sx={{bgcolor: '#fff'}} />
								) : (
									<Tab
										label="Hostels"
										sx={{bgcolor: '#292D32', color: '#fff'}}
									/>
								)}
								{quickTabValue === 1 ? (
									<Tab label="Rooms" sx={{bgcolor: '#fff'}} />
								) : (
									<Tab label="Rooms" sx={{bgcolor: '#292D32', color: '#fff'}} />
								)}
								{quickTabValue === 2 ? (
									<Tab label="Tours" sx={{bgcolor: '#fff'}} />
								) : (
									<Tab label="Tours" sx={{bgcolor: '#292D32', color: '#fff'}} />
								)}
							</Tabs>
						</div>
						<div className={styles.quicksearchcontent}>
							<TabPanel value={quickTabValue} index={0}>
								<div className={styles.qwraphostel}>
									<div className={styles.qhostel}>
										<div className={styles.qhostelcity}>
											<div className={styles.qhostelfrom}>
												<div className={styles.qhostelcitytext}>FROM</div>
												<div className={styles.qhostelcityname}>
													Washington DC
												</div>
												<div className={styles.qhostelcitycountry}>
													North America, USA
												</div>
											</div>
											<div className={styles.qhostelcitychange}>
												<IconButton></IconButton>
											</div>
											<div className={styles.qhostelto}>
												<div className={styles.qhostelcitytext}>TO</div>
												<div className={styles.qhostelcityname}>Dubai</div>
												<div className={styles.qhostelcitycountry}>
													Asia, United Arab Emirates
												</div>
											</div>
										</div>
										<div className={styles.qhosteldate}>
											<div className={styles.qhosteldatedeparture}>
												<div className={styles.qhostelcitytext}>DEPARTURE</div>
												<div className={styles.qhostelcityname}>
													Sun, 22 May
												</div>
											</div>
											<div className={styles.qhosteldatereturn}>
												<div className={styles.qhostelcitytext}>RETURN</div>
												<div className={styles.qhostelcityname}>
													Fri, 27 May
												</div>
											</div>
										</div>
									</div>
									<div className={styles.qhostelsearchbutton}>
										<Button
											variant="contained"
											color="warning"
											sx={{width: '179px', height: '48px'}}>
											SEARCH HOSTELS
										</Button>
									</div>
								</div>
							</TabPanel>
							<TabPanel value={quickTabValue} index={1}>
								<div className={styles.qroom}>
									Item Two <br />
									Item <br />
									Item
								</div>
							</TabPanel>
							<TabPanel value={quickTabValue} index={2}>
								<div className={styles.qtour}>
									Item Three <br />
									Item Three <br />
									Item Three
								</div>
							</TabPanel>
						</div>
						{/* END: <div className={styles.quicksearchcontent}> */}
					</div>
					{/* END: <div className={styles.quicksearch}> */}
				</div>
				{/* END: <div className={styles.wrapquicksearch}> */}
			</main>

			<WrapFooter />
		</div>
	);
}
