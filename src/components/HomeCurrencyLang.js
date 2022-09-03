import React, {useState} from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import iconArrowDown from '../../public/img/icon/icon-arrow-down.svg';
import iconLanguage from '../../public/img/icon/icon-language.svg';

import styles from 'styles/HomeCurrencyLang.module.css';

const HomeCurrencyLang = ({whichComponent}) => {
	const WrapHeaderComponent = whichComponent === 'WrapHeader'; // WrapHeaderComponent is true if HomeCurrencyLang is in WrapHeader.js and is false if HomeCurrencyLang is in WrapFooter.js

	// BEGIN CODE: Currency unit text in top right: open/close effect
	const [anchorElCurrency, setAnchorElCurrency] = useState(null);
	const openCurrency = Boolean(anchorElCurrency);
	const handleClickCurrency = (e) => {
		setAnchorElCurrency(e.currentTarget);
	};
	const handleCloseCurrency = () => {
		setAnchorElCurrency(null);
	};
	// END CODE: Currency unit text in top right: open/close effect

	// BEGIN CODE: Language in top right: open/close effect
	const [anchorElLanguage, setAnchorElLanguage] = useState(null);
	const openLanguage = Boolean(anchorElLanguage);
	const handleClickLanguage = (e) => {
		setAnchorElLanguage(e.currentTarget);
	};
	const handleCloseLanguage = () => {
		setAnchorElLanguage(null);
	};
	// END CODE: Language in top right: open/close effect

	// BEGIN CODE: TEST DATA
	const currencyUnit = 'USD';
	const languageUnit = 'English';
	// END CODE: TEST DATA

	return (
		<div className={styles.currencylang}>
			{/* BEGIN CODE: Language in top right: open/close effect */}
			<div className={styles.language}>
				<Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
					<Tooltip title="Language">
						<Button
							id="basic-button"
							onClick={handleClickLanguage}
							aria-controls={openLanguage ? 'account-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={openLanguage ? 'true' : undefined}
							style={{
								color: WrapHeaderComponent ? '#000' : '#fff',
								fontSize: '0.98em',
							}}
							startIcon={<Image src={iconLanguage} alt="Language icon" />}>
							{languageUnit}
						</Button>
					</Tooltip>
				</Box>
				<Menu
					anchorEl={anchorElLanguage}
					id="account-menu"
					open={openLanguage}
					onClose={handleCloseLanguage}
					onClick={handleCloseLanguage}
					transformOrigin={{
						horizontal: 'right',
						vertical: WrapHeaderComponent ? 'top' : 'bottom',
					}}
					anchorOrigin={{
						horizontal: 'right',
						vertical: WrapHeaderComponent ? 'bottom' : 'top',
					}}>
					<MenuItem>English</MenuItem>
					<MenuItem>Franch</MenuItem>
					<MenuItem>Spanish</MenuItem>
				</Menu>
			</div>
			{/* END CODE: Language in top right: open/close effect */}

			{/* BEGIN CODE: Currency unit in top right: open/close effect */}
			<div className={styles.currency}>
				<Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
					<Tooltip title="Currency unit">
						<Button
							id="basic-button"
							onClick={handleClickCurrency}
							aria-controls={openCurrency ? 'account-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={openCurrency ? 'true' : undefined}
							style={{
								color: WrapHeaderComponent ? '#000' : '#fff',
								fontSize: '0.98em',
							}}
							endIcon={<Image src={iconArrowDown} alt="Arrow Down icon" />}>
							{currencyUnit}
						</Button>
					</Tooltip>
				</Box>
				<Menu
					anchorEl={anchorElCurrency}
					id="account-menu"
					open={openCurrency}
					onClose={handleCloseCurrency}
					onClick={handleCloseCurrency}
					transformOrigin={{
						horizontal: 'right',
						vertical: WrapHeaderComponent ? 'top' : 'bottom',
					}}
					anchorOrigin={{
						horizontal: 'right',
						vertical: WrapHeaderComponent ? 'bottom' : 'top',
					}}>
					<MenuItem>USD</MenuItem>
					<MenuItem>Euro</MenuItem>
				</Menu>
			</div>
			{/* END CODE: Currency unit in top right: open/close effect */}
		</div>
	);
};

export default HomeCurrencyLang;
