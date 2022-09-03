import React, { useContext, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useForm, Controller } from 'react-hook-form';
import Cookies from 'js-cookie';
import { getAuth } from "firebase/auth";

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Store } from 'utils/StoreUtils/Store.js';
import { login } from 'utils/api';
import styles from 'styles/PostCreate.module.css';
import iconEmail from '../../public/img/icon/icon-email.svg';
import iconFullname from '../../public/img/icon/icon-fullname.svg';
import iconPassword from '../../public/img/icon/icon-password.svg';
import iconVisibility from '../../public/img/icon/icon-visibility.svg';
import iconVisibilityOff from '../../public/img/icon/icon-visibility-off.svg';

const PostCreate = ({ }) => {

	const [range, setRange] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection'
		}
	])

	// open close
	const [open, setOpen] = useState(false)

	// get the target element to toggle 
	const refOne = useRef(null)

	useEffect(() => {
		// event listeners
		document.addEventListener("keydown", hideOnEscape, true)
		document.addEventListener("click", hideOnClickOutside, true)
	}, [])

	// hide dropdown on ESC press
	const hideOnEscape = (e) => {
		// console.log(e.key)
		if (e.key === "Escape") {
			setOpen(false)
		}
	}

	// Hide on outside click
	const hideOnClickOutside = (e) => {
		// console.log(refOne.current)
		// console.log(e.target)
		if (refOne.current && !refOne.current.contains(e.target)) {
			setOpen(false)
		}
	}


	const auth = getAuth();

	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();
	const router = useRouter();
	const { redirect } = router.query; // For Example: login?redirect=/hotels&message=You-are-logged-in
	const { state, dispatch } = useContext(Store);
	//for rating stars
	const [value, setValue] = React.useState(2);

	useEffect(() => {
		if (state?.userInfo) {
			router.push('/?message=You-are-logged-in');
		}
	}, []);

	const submitHandler = async (props) => {
		const phone_number = auth.currentUser?.phoneNumber;

		if (!phone_number && whichPage === 'register') {
			alert('please verify your number')
			router.push('/send-otp-code')
		}
		setLoading(true);

		setLoading(false);
	};


	return (
		<>
			<div className={styles.heading}>Add Travel Details</div>
			<div className={styles.form}>
				<form onSubmit={handleSubmit(submitHandler)}>

					<div className={styles.fileUpload} style={{ paddingBottom: '20px', paddingTop: '20px' }}>
						<label htmlFor="fileUpload">
							<input
								type="file"
								id="fileUpload"
								name="fileUpload"
								onChange={(e) => {
									console.log(e.target.files[0]);
								}}
							/>
						</label>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="fullname">Where you are going</label>
						<TextField
							id="fullname"
							variant="outlined"
							margin="normal"
							fullWidth
							error={errors.fullname ? true : false}
							helperText={errors.fullname ? errors.fullname.message : ''}
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="fullname">When you going</label>
						<TextField
							id="date"
							value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
							variant="outlined"
							margin="normal"
							fullWidth
							readOnly
							onClick={() => setOpen(open => !open)}
							error={errors.fullname ? true : false}
							helperText={errors.fullname ? errors.fullname.message : ''}
						/>

					</div>
					<div ref={refOne} style={{ border: '1px solid #e0e0e0', width: 'fit-content' }}>
						{open &&
							<DateRange
								onChange={item => setRange([item.selection])}
								editableDateInputs={true}
								moveRangeOnFirstSelection={false}
								ranges={range}
								months={1}
								direction="horizontal"
								className="calendarElement"
							/>
						}
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="hotelname">Enter Hotel Name</label>
						<TextField
							id="hotelname"
							variant="outlined"
							margin="normal"
							fullWidth
							error={errors.hotelname ? true : false}
							helperText={errors.hotelname ? errors.hotelname.message : ''}
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="hotelname">Enter Hotel Name</label><br />
					</div>
					<Rating
						name="simple-controlled"
						value={value}
						size="large"
						style={{ color: '#657ADC' }}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					/>
					<div className={styles.formGroup}>
						<label htmlFor="hotelname">How much you pay for one night stay</label>
						<TextField
							id="hotelname"
							variant="outlined"
							margin="normal"
							fullWidth
							error={errors.hotelname ? true : false}
							helperText={errors.hotelname ? errors.hotelname.message : ''}
						/>
						<label htmlFor="hotelname">Your Partner Pay $250 to you</label>
					</div>
					<div className={styles.formGroup} style={{ paddingTop: "20px" }}>
						<label htmlFor="hotelname">Message for your partner</label>
						<TextField
							id="hotelname"
							variant="outlined"
							margin="normal"
							value={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
							fullWidth
							error={errors.hotelname ? true : false}
							helperText={errors.hotelname ? errors.hotelname.message : ''}
						/>
					</div>
					<FormControl>
						<FormLabel id="demo-row-radio-buttons-group-label">Type of travel partner looking for</FormLabel>
						<RadioGroup
							row
							aria-labelledby="demo-row-radio-buttons-group-label"
							name="row-radio-buttons-group"
						>
							<FormControlLabel value="female" control={<Radio />} label="Female" />
							<FormControlLabel value="male" control={<Radio />} label="Male" />
						</RadioGroup>
					</FormControl>
					<div className={styles.logregformbuttons}>
						<Button
							variant="contained"
							sx={{ width:'100%',height: '55px', fontSize: '16px' ,textDecoration:'none'}}>
							Post it
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default PostCreate;
