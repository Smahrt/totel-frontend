import React, { useContext, useEffect, useState } from 'react';
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
import { Store } from 'utils/StoreUtils/Store.js';
import { login } from 'utils/api'
import WrapHeader from 'components/WrapHeader';
import WrapFooter from 'components/WrapFooter';
import styles from 'styles/LoginRegister.module.css';
import iconEmail from '../../../public/img/icon/icon-email.svg';
import iconFullname from '../../../public/img/icon/icon-fullname.svg';
import iconPassword from '../../../public/img/icon/icon-password.svg';
import iconVisibility from '../../../public/img/icon/icon-visibility.svg';
import iconVisibilityOff from '../../../public/img/icon/icon-visibility-off.svg';

const LoginRegister = ({ whichPage }) => {
	// whichPage can be 'login' OR 'register'

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

		if (whichPage === 'register') {
			if (props.password !== props.confirmPassword) {
				setLoading(false);
				Swal.fire('Error', "Passwords don't match", 'error');
				return;
			}
		}

		let fetchUrl = '';
		let fetchBody = {};
		if (whichPage === 'login') {
			fetchUrl = 'https://metoospace.herokuapp.com/api/v1/auth/login';
			fetchBody = { email: props.email, password: props.password };
		} else if (whichPage === 'register') {
			fetchUrl = 'https://metoospace.herokuapp.com/api/v1/auth/signup';
			fetchBody = {
				name: props.fullname,
				email: props.email,
				password: props.password,
				phone_number,
			};
		}
		await login(fetchBody, dispatch);
		// try {
		// 	const res = await fetch(fetchUrl, {
		// 		method: 'POST',
		// 		headers: {'Content-Type': 'application/json'},
		// 		body: JSON.stringify(fetchBody),
		// 	});
		// 	if (res.ok) {
		// 		if ( whichPage === 'login'){
		// 			const data = await res.json();
		// 			dispatch({type: 'USER_LOGIN', payload: data});
		// 			Cookies.set('userInfo', JSON.stringify(data));
		// 			router.push(redirect || `/user/${data._id}`);
		// 		}
		// 		else {
		// 			router.push(redirect || `/login`);
		// 		}
		// 	} else {
		// 		setLoading(false);
		// 		Swal.fire(
		// 			'Error',
		// 			'There is an error. Please try again later.',
		// 			'error'
		// 		);
		// 	}
		// } catch (err) {
		// 	console.log(err);
		// }
		setLoading(false);
	};

	return (
		<>
			<div className={styles.modalbody}>
				<h2 className={styles.modalheading}>
					Login to Continue
				</h2>
				<p className={styles.modalheadingtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>

				<form onSubmit={handleSubmit(submitHandler)} noValidate>
					<div className={styles.logregtextfield}>
						<Controller
							name="email"
							control={control}
							defaultValue=""
							rules={{
								required: true,
								pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
							}}
							render={({ field }) => (
								<TextField
									fullWidth
									id="email"
									type="email"
									error={Boolean(errors.email)}
									helperText={
										errors.email
											? errors.email.type === 'pattern'
												? 'Email is not valid'
												: 'Email is required'
											: ''
									}
									label={
										<span>
											<span style={{ padding: '0 9px 0 0' }}>
												<Image src={iconEmail} alt="Email icon" />
											</span>
											<span
												style={{
													position: 'relative',
													top: '-5px',
													color: '#292D32',
												}}>
												Enter Email Address
											</span>
										</span>
									}
									{...field}
								/>
							)}
						/>
					</div>
					<div className={styles.logregtextfield}>
						<Controller
							name="password"
							control={control}
							defaultValue=""
							rules={{
								required: true,
								minLength: 6,
							}}
							render={({ field }) => (
								<TextField
									fullWidth
									id="password"
									type={showPassword ? 'text' : 'password'}
									error={Boolean(errors.password)}
									helperText={
										errors.password
											? errors.password.type === 'minLength'
												? 'Password length is more than 5'
												: 'Password is required'
											: ''
									}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={() => setShowPassword(!showPassword)}
													onMouseDown={(e) => e.preventDefault()}
													edge="end">
													{showPassword ? <Image src={iconVisibilityOff} alt="Visibility Off icon" /> : <Image src={iconVisibility} alt="Visibility icon" />}
												</IconButton>
											</InputAdornment>
										),
									}}
									label={
										<span>
											<span style={{ padding: '0 9px 0 0' }}>
												<Image src={iconPassword} alt="Password icon" />
											</span>
											<span
												style={{
													position: 'relative',
													top: '-5px',
													color: '#292D32',
												}}>
												Enter Password
											</span>
										</span>
									}
									{...field}
								/>
							)}
						/>
					</div>
					<div className={styles.logregformforgotdiv}>
						{whichPage === 'login' && (
							<Link href="/forget">Reset Password</Link>
						)}
					</div>
					<div className={styles.logregformbuttons}>
						<Button
							variant="contained"
							sx={{ height: '55px', fontSize: '16px' }}>
							{whichPage === 'login' && 'Login'}
							{whichPage === 'register' && 'CONTINUE'}
							{loading && (
								<>
									&nbsp; <CircularProgress color="inherit" size={18} />
								</>
							)}
						</Button>
					</div>
				</form>
				<div className={styles.socialloginText}>
					{whichPage === 'login' && '  or continue with'}
				</div>
				<div className={styles.sociallogin}>
					<div className={styles.socialgoogle}>
						<Button sx={{ border: '1px solid #CECFD1', borderRadius: '12px' }}></Button>
					</div>
					<div className={styles.socialface}>
						<Button sx={{ border: '1px solid #CECFD1', borderRadius: '12px' }}></Button>
					</div>
				</div>
				<div>
					<p className={styles.lasttext}>
						{whichPage === 'login' && "Don't have an account?"}
						{whichPage === 'register' && 'Already have an account?'}
						<a
							href={
								whichPage === 'login'
									? '/send-otp-code'
									: whichPage === 'register' && '/login'
							}>
							{whichPage === 'login' && ' Signup'}
							{whichPage === 'register' && ' Signin'}
						</a>
					</p>
				</div>
			</div>

		</>
	);
};

export default LoginRegister;
