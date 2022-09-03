import React, { useState } from 'react';
import Image from "next/image";
import Button from "@mui/material/Button";

import iconUser from '../../public/img/icon/icon-user-alt.svg';
import styles from 'styles/RequestList.module.css';
import Requset from './Collapsible.js';

const RequestList = ({ }) => {



	return (
		<>
			<div className={styles.heading}>List of Request</div>
			<div>
				<Requset
					name='Annette Black'
					occupation='Doctor'
					image='/img/user11.png'
					rating='2.0'
				>
					<Button className={styles.accpetbtn}>
						Accept
					</Button>
					<Button className={styles.rejectbtn}>
						Reject
					</Button>
				</Requset>
				<Requset
					name='Cameron Williamson'
					occupation='Doctor'
					image='/img/user12.png'
					rating='3.0'
				>
					<Button className={styles.accpetbtn}>
						Accept
					</Button>
					<Button className={styles.rejectbtn}>
						Reject
					</Button>
				</Requset>
				<Requset
					name='Dianne Russell'
					occupation='Doctor'
					image='/img/user13.png'
					rating='3.5'
				>
					<Button className={styles.accpetbtn}>
						Accept
					</Button>
					<Button className={styles.rejectbtn}>
						Reject
					</Button>
				</Requset>
				<Requset
					name='Darlene Robertson'
					occupation='Doctor'
					image='/img/user14.png'
					rating='3.0'
				>
					<Button className={styles.accpetbtn}>
						Accept
					</Button>
					<Button className={styles.rejectbtn}>
						Reject
					</Button>
				</Requset>
			</div>
		</>
	);
};

export default RequestList;
