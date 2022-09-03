import React, {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useForm, Controller } from 'react-hook-form';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { Store } from 'utils/StoreUtils/Store.js';
import WrapHeader from 'components/WrapHeader';
import WrapFooter from 'components/WrapFooter';
import styles from 'styles/LoginRegister.module.css';
import { PhoneNumberAuthenticator } from 'components/firebase'
import TextField from '@mui/material/TextField';

const SendOTPCode = ({whichPage}) => {

	const router = useRouter();
	const {state, dispatch} = useContext(Store);
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (state?.userInfo) {
			router.push('/?message=You-are-logged-in');
		}
	}, []);

	
	return (
		<>
			{/* <WrapHeader /> */}

			<div className={styles.modalbody}>
				<h2 className={styles.modalheading}>
				Enter your number
				</h2>
				<p className={styles.modalheadingtext}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>

				<TextField
									fullWidth
									id="email"
									type="email"
									error={Boolean(errors.email)}
									
									label={
										<span>
											
											<span
												style={{
													position: 'relative',
													top: '-5px',
													color: '#292D32',
												}}>
												Enter Mobile Number
											</span>
										</span>
									}
								/>
								{/* <PhoneNumberAuthenticator /> */}
				<div>
					<p className={styles.lasttext}>
					Already have an account?
						<a href={''}>
							Login
						</a>
					</p>
				</div>
			</div>

			{/* <WrapFooter /> */}
		</>
	);
};

export default SendOTPCode;
