import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Swal from 'sweetalert2';
import {useForm, Controller} from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import IconCode from '@mui/icons-material/Numbers'

import { Store } from 'utils/StoreUtils/Store.js';
import WrapHeader from 'components/WrapHeader';
import WrapFooter from 'components/WrapFooter';
import styles from 'styles/LoginRegister.module.css';

const VerifyOTPCode = (params) => {
	const [loading, setLoading] = useState(false);
	const {
		handleSubmit,
		control,
		formState: {errors},
	} = useForm();
	const router = useRouter();
	console.log(router.query);
	const {redirect} = router.query; // For Example: login?redirect=/hotels&message=You-are-logged-in
	const {state, dispatch} = useContext(Store);
	useEffect(() => {
		if (state?.userInfo) {
			router.push('/?message=You-are-logged-in');
		}
	}, []);

	const submitHandler = async (props) => {
		setLoading(true);

		let fetchUrl = 'https://metoospace.herokuapp.com/api/v1/auth/phone-otp';
		let fetchBody = {phone_number: router.query.phoneNumber, code: props.code};
		try {
			const res = await fetch(fetchUrl, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(fetchBody),
			});
			if (res.ok) {;
				    router.push(redirect || `/signup/${router.query.phoneNumber}`);
			} else {
				setLoading(false);
				Swal.fire(
					'Error',
					'There is an error. Please try again later.',
					'error'
				);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<WrapHeader />

			<main className={styles.logreg}>
				{/* logreg is abbreviation of login-register */}
				<aside>
					<div className={styles.logregsidelogo}>
						<Link href="/">Metoospace</Link>
					</div>
					<h1>LOREM IPSUM</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</aside>
				<section>
					<div className={styles.logregtoplinks}>
						<p>
							{'Already have an account?'}
						</p>
						<Link
							href={'/login'}>
							<Button
								variant="outlined"
								sx={{
									height: '48px',
									color: '#292D32',
									border: '1px solid #D9D9D9',
									fontSize: '16px',
								}}>
								{'SIGN IN'}
							</Button>
						</Link>
					</div>
					<h2>Welcome</h2>
					<p className={styles.logregunderh2}>
						{'Enter sent code'}
					</p>

					<form onSubmit={handleSubmit(submitHandler)} noValidate>
						<div className={styles.logregtextfield}>
							<Controller
								name="code"
								control={control}
								defaultValue=""
								rules={{
									required: true,
                                    minLength: 6
								}}
								render={({field}) => (
									<TextField
										fullWidth
										id="code"
										type="code"
										error={Boolean(errors.code)}
										helperText={
											errors.code
												? errors.code.type === 'minLength'
													? 'Code Name length is more than 5'
													: 'Code is required'
												: ''
										}
										label={
											<span>
												<span style={{padding: '0 9px 0 0'}}>
													<IconCode/>
												</span>
												<span
													style={{
														position: 'relative',
														top: '-5px',
														color: '#292D32',
													}}>
													Enter Code
												</span>
											</span>
										}
										{...field}
									/>
								)}
							/>
						</div>

						<p className={styles.formagreement}>
							By signing in
							or creating an account, you agree
							with our <Link href="/terms-use">Terms &amp; Conditions</Link> and
							<Link href="/privacy-policy">Privacy Statement</Link>
						</p>
						<div className={styles.logregformbuttons}>
							<Button
								type="submit"
								variant="contained"
								color="warning"
								sx={{height: '55px', fontSize: '16px'}}>
								{'CONTINUE'}
								{loading && (
									<>
										&nbsp; <CircularProgress color="inherit" size={18} />
									</>
								)}
							</Button>

						</div>
					</form>

					<div className={styles.sociallogin}>
						<p className={styles.socialp}>
							Create account with
						</p>
						<div className={styles.socialface}>
							<IconButton sx={{border: '1px solid #CECFD1'}}></IconButton>
						</div>
						<div className={styles.sociallinkedin}>
							<IconButton sx={{border: '1px solid #CECFD1'}}></IconButton>
						</div>
						<div className={styles.socialgoogle}>
							<IconButton sx={{border: '1px solid #CECFD1'}}></IconButton>
						</div>
					</div>

					<div className={styles.curveline1}></div>
				</section>
			</main>

			<WrapFooter />
		</>
	);
};

export default VerifyOTPCode;
