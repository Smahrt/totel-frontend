import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Store } from 'utils/StoreUtils/Store.js';
import styles from 'styles/WrapHeader.module.css';
import iconLogout from '../../public/img/icon/icon-logout.svg';
import iconArrowDown from '../../public/img/icon/icon-arrow-down.svg';
import iconPlus from '../../public/img/icon/icon-plus.svg';
import iconBell from '../../public/img/icon/icon-bell.svg';
import iconMessage from '../../public/img/icon/icon-message.svg';
import Modal from './Modal'
import LoginRegister from './auth/LoginRegister';
import SendOTPCode from './auth/SendOTPCode';
import PostCreate from './PostCreate';
import RequestList from './RequestList';


const WrapHeaderTopLinks = () => {
	const { state, dispatch } = useContext(Store);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showSignupModal, setShowSignupModal] = useState(false);
	const [showPostModal, setShowPostModal] = useState(false);
	const [showModalRequest, setShowModalRequest] = useState(false);

	const router = useRouter();

	// BEGIN CODE: user menu in top right: open/close effect
	const [anchorElTopRightUser, setAnchorElTopRightUser] = useState(null);
	const openTopRightUser = Boolean(anchorElTopRightUser);
	const handleClickTopRightUser = (e) => {
		setAnchorElTopRightUser(e.currentTarget);
	};
	const handleCloseTopRightUser = () => {
		setAnchorElTopRightUser(null);
	};
	// END CODE: user menu in top right: open/close effect

	const logoutClickHandler = () => {
		dispatch({ type: 'USER_LOGOUT' });
		Cookies.remove('userInfo');
		router.push('/');
	};

	return (
		<>
			{/* <div className={styles.toprightsupport}>
				<Link href="/support">Support</Link>
			</div> */}

			{/* <div className={styles.topcurrencylang}>
				<HomeLocation whichComponent="WrapHeader" />
			</div> */}

			{/* BEGIN CODE: user menu in top right: open/close effect */}
			<div className={styles.toprightuser}>
				{state?.userInfo ? (
					<>
						<Box
							sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
							<Tooltip title="Account settings">
								<Button
									onClick={handleClickTopRightUser}
									aria-controls={openTopRightUser ? 'account-menu' : undefined}
									aria-haspopup="true"
									aria-expanded={openTopRightUser ? 'true' : undefined}
									endIcon={<Image src={iconArrowDown} alt="Arrow Down icon" />}
									style={{ color: '#000' }}>
									<Avatar alt={state?.userInfo.name} src={state?.userInfo.imgUrl} />
								</Button>
							</Tooltip>
						</Box>
						<Menu
							anchorEl={anchorElTopRightUser}
							id="account-menu"
							open={openTopRightUser}
							onClose={handleCloseTopRightUser}
							onClick={handleCloseTopRightUser}
							PaperProps={{
								elevation: 0,
								sx: {
									overflow: 'visible',
									filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
									mt: 1.5,
									'& .MuiAvatar-root': {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									'&:before': {
										content: '""',
										display: 'block',
										position: 'absolute',
										top: 0,
										right: 47,
										width: 10,
										height: 10,
										bgcolor: 'background.paper',
										transform: 'translateY(-50%) rotate(45deg)',
										zIndex: 0,
									},
								},
							}}
							transformOrigin={{ horizontal: 'right', vertical: 'top' }}
							anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
							<MenuItem>
								<Avatar /> <Link href={`/user/${state?.userInfo._id}`}>Profile</Link>
							</MenuItem>
							{/* <MenuItem>
								<Avatar /> My account
							</MenuItem> */}
							<MenuItem onClick={logoutClickHandler}>
								<ListItemIcon>
									<Image src={iconLogout} alt="Logout icon" />
								</ListItemIcon>
								Logout
							</MenuItem>
						</Menu>
					</>
				) : (
					<div className={styles.leftheaderaccount}>
						<Button
							className={styles.toprightloginpostbtn}
							style={{ textTransform: 'none',borderRadius:'22px' ,color: '#fff',paddingLeft:'15px',paddingRight:'15px',marginRight:'5px' }}
							startIcon={<Image src={iconPlus} alt="Plus icon" />}
							onClick={() => {
								setShowPostModal(true)
							}}>
							Post
						</Button>
						{/*  Button */}
						{/* <Button
							className={styles.toprightloginother}
							style={{ textTransform: 'none' }}
							onClick={() => {
								router.push('/login');
							}}>
							Sign In
						</Button> */}
						<Button
							className={styles.toprightloginicon}
							style={{ textTransform: 'none' }}
							startIcon={<Image src={iconMessage} alt="Message icon" />}
							onClick={() => setShowModalRequest(true)}
						>
						</Button>
						<Button
							className={styles.toprightloginicon}
							style={{ textTransform: 'none' }}
							startIcon={<Image src={iconBell} alt="Bell icon" />}
							onClick={() => setShowModalRequest(true)}
							>
						</Button>
						<Box
							sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
							<Tooltip title="Account settings">
								<Button
									onClick={handleClickTopRightUser}
									aria-controls={openTopRightUser ? 'account-menu' : undefined}
									aria-haspopup="true"
									aria-expanded={openTopRightUser ? 'true' : undefined}
									style={{ color: '#000' }}>
									<Avatar src={'user.png'} alt="avatar"/>
								</Button>
							</Tooltip>
						</Box>
						<Menu
							anchorEl={anchorElTopRightUser}
							id="account-menu"
							open={openTopRightUser}
							onClose={handleCloseTopRightUser}
							onClick={handleCloseTopRightUser}
							PaperProps={{
								elevation: 0,
								sx: {
									borderRadius: '20px',
									overflow: 'visible',
									width: '202px',
									filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
									mt: 1.5,
									'& .MuiAvatar-root': {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									'&:before': {
										content: '""',
										display: 'block',
										position: 'absolute',
										top: 0,
										right: 47,
										width: 10,
										height: 10,
										bgcolor: 'background.paper',
										transform: 'translateY(-50%) rotate(45deg)',
										zIndex: 0,
									},
									'.MuiMenuItem-root a': {
										color: '#696888',
									},
									'.MuiMenuItem-root span': {
										color: '#696888',
									},
								},
							}}
							transformOrigin={{ horizontal: 'right', vertical: 'top' }}
							anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
							<MenuItem>
								<Link href={''}>
									<span onClick={() => setShowSignupModal(true)}>Signup</span>
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href={''}>
									<span onClick={() => setShowLoginModal(true)}>Login</span>
								</Link>
							</MenuItem>
							<Divider variant="middle" />
							<MenuItem>
								<Link href={`/how-it-work`}>How it Work</Link>
							</MenuItem>
							<MenuItem>
								<Link href={`/help`}>Help</Link>
							</MenuItem>
							<MenuItem>
								<Link href={`/about-totel`}>About Totel</Link>
							</MenuItem>
						</Menu>
						<Modal
							onClose={() => setShowSignupModal(false)}
							show={showSignupModal}
							title="Sign up"
							>
							<SendOTPCode  />
						</Modal>
						<Modal
							onClose={() => setShowLoginModal(false)}
							show={showLoginModal}
							title="Log in or sign up"
							>
							<LoginRegister whichPage='login' />
						</Modal>
						<Modal
							onClose={() => setShowPostModal(false)}
							show={showPostModal}
							title=""
							
						>
							<PostCreate />
						</Modal>
						<Modal
							onClose={() => setShowModalRequest(false)}
							show={showModalRequest}
							title=""
							
						>
							<RequestList />
						</Modal>
						
					</div>
				)}
			</div>
			{/* END CODE: user menu in top right: open/close effect */}
		</>
	);
};
export default WrapHeaderTopLinks;
