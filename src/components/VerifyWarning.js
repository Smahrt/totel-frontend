import React, {useContext, useState} from 'react';
import Link from 'next/link';

import { Store } from 'utils/StoreUtils/Store.js';
import styles from 'styles/WrapHeader.module.css';

const VerifyWarning = () => {
	const { state } = useContext(Store);

	return (
		<>
			{state?.userInfo && !state?.userInfo.isEmailVerified && (
				<div className={styles.verify}>
					Your account is not active yet.
					<Link href={`/user/${state?.userInfo._id}`}>Please verify your Email.</Link>
				</div>
			)}
			{state?.userInfo && !state?.userInfo.isPhoneVerified && (
				<div className={styles.verify}>
					Your account is not active yet.
					<Link href={`/user/${state?.userInfo._id}`}>
						Please verify your Phone Number.
					</Link>
				</div>
			)}
		</>
	);
};
export default VerifyWarning;
