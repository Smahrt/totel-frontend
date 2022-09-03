import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Autocomplete, Avatar, List, ListItem, ListItemAvatar, ListItemText, Modal, Typography, useTheme } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Grid from "@mui/material/Grid";
// import IntlMessages from "utils/IntlMessages";
import Box from "@mui/material/Box";
import { Fonts } from "shared/constants/AppEnums";
import AppAnimate from "components/animate";
import AppTextField from "components/form-components/text-field";
import Divider from '@mui/material/Divider';
import AppDateFiled from "components/form-components/app-date-filed";
import hotel from "services/hotel";
import { throttle } from "lodash";
// @ts-ignore
// import { useIntl } from "react-intl";

const validationSchema = yup.object({
	name: yup
		.string()
		.required(String("Enter a hotel name")),
	checkInDate: yup
		.string()
		.required(String("Enter a checkin date")),
	checkOutDate: yup
		.string()
		.required(String("Enter a checkout date")),
	noOfRooms: yup
		.number()
		.required(String("Enter a number of rooms")),
	noOfAdults: yup
		.number()
		.required(String("Enter a number of adults")),
	noOfChildren: yup
		.number()
		.required(String("Enter a number of children")),
});

const modalStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

interface IHotel {
	chainCode: string;
	iataCode: string;
	dupeId: number;
	name: string;
	hotelId: string;
	geoCode: {
		latitude: number;
		longitude: number;
	},
	address: {
		countryCode: string;
	}
}

interface IOffer {
	id: string;
	checkInDate: string;
	checkOutDate: string;
	rateCode: string;
	rateFamilyEstimated: {
		code: string;
		type: string;
	},
	commission: {
		percentage: string;
	},
	boardType: string;
	room: {
		type: string;
		typeEstimated: {
			category: string;
			beds: number;
			bedType: string;
		},
		description: {
			text: string;
			lang: string;
		}
	},
	guests: {
		adults: 1
	},
	price: {
		currency: string;
		base: string;
		total: string;
		taxes: [
			{
				code: string;
				amount: string;
				currency: string;
				included: boolean;
			}
		],
		variations: {
			average: {
				base: string;
			},
			changes: [
				{
					startDate: string;
					endDate: string;
					total: string;
				}
			]
		}
	},
	policies: {
		paymentType: string;
		cancellation: {
			deadline: string;
		}
	},
	self: string;
}

const Signup = () => {
	const theme = useTheme();
	// const { messages } = useIntl();
	const [open, setOpen] = React.useState(false);
	const [offers, setOffers] = React.useState<IOffer[]>([]);

	const [value, setValue] = React.useState<IHotel | null>(null);
	const [inputValue, setInputValue] = React.useState('');
	const [options, setOptions] = React.useState<readonly IHotel[]>([]);

	const searchHotel = async ({ input }: { input: string; }, callback: (results?: readonly IHotel[]) => void) => {
		if (input.length > 2) {
			const { data } = await hotel.findByCity(input);
			callback(data);
		}
	}

	const toggleModal = () => setOpen(!open);

	const fetch = React.useMemo(
		() =>
			throttle(
				(
					request: { input: string },
					callback: (results?: readonly IHotel[]) => void,
				) => {
					searchHotel(
						request,
						callback,
					);
				},
				200,
			),
		[],
	);

	React.useEffect(() => {
		let active = true;

		if (inputValue === '') {
			setOptions(value ? [value] : []);
			return undefined;
		}

		fetch({ input: inputValue }, (results?: readonly IHotel[]) => {
			if (active) {
				let newOptions: readonly IHotel[] = [];

				if (value) {
					newOptions = [value];
				}

				if (results) {
					newOptions = [...newOptions, ...results];
				}

				setOptions(newOptions);
			}
		});

		return () => {
			active = false;
		};
	}, [value, inputValue, fetch]);

	return (
		<AppAnimate animation="transition.slideUpIn" delay={200}>
			<Box
				sx={{
					pb: 6,
					py: { xl: 8 },
					display: "flex",
					// flex: 1,
					// flexDirection: "column",
					alignItems: "center",
					justifyContent: "end",
				}}
			>
				<Card
					sx={{
						maxWidth: 420,
						width: "100%",
						padding: 8,
						borderRadius: 6,
					}}
				>
					<Box
						component="h3"
						sx={{
							fontWeight: Fonts.BOLD,
							fontSize: 20,
						}}
					>
						Find your best hotel
					</Box>
					<Box
						sx={{
							mb: 6,
							fontWeight: Fonts.REGULAR,
							fontSize: 14,
							color: "#6c6a6a"
						}}
					>
						Search low prices on hotels, homes, and much more...
					</Box>
					<Divider
						light
						sx={{
							mb: 8
						}} />
					<Formik
						validateOnChange={true}
						initialValues={{
							name: "",
							checkInDate: "",
							checkOutDate: "",
							noOfAdults: 1,
							noOfChildren: 0,
							noOfRooms: 1,
						}}
						validationSchema={validationSchema}
						onSubmit={async (data, { setErrors, resetForm, setSubmitting }) => {
							const params = {
								...data,
								hotelIds: value?.hotelId,
								name: undefined,
							};
							console.log(params);
							// resetForm();
							// TODO: search the hotel endpoint
							const { data: res } = await hotel.searchOffers(params);
							setSubmitting(false);
							console.log({ res });
							setOffers(res[0]?.offers || []);
							toggleModal();
						}}
					>
						{({ isSubmitting }) => (
							<Form noValidate autoComplete="off">
								{/* Hotel name search */}
								<Box
									sx={{
										mb: 8,
									}}
								>
									<Box
										component="p"
										sx={{
											fontSize: 14,
											color: "#000",
											fontWeight: Fonts.REGULAR,
										}}
									>
										Where you want to go
									</Box>
									<Box>
										<Autocomplete
											id="name"
											sx={{ width: 300 }}
											getOptionLabel={(option) =>
												typeof option === 'string' ? option : option.name
											}
											filterOptions={(x) => x}
											options={options}
											autoComplete
											includeInputInList
											filterSelectedOptions
											value={value}
											onChange={(event: any, newValue: IHotel | null) => {
												setOptions(newValue ? [newValue, ...options] : options);
												setValue(newValue);
											}}
											onInputChange={(event, newInputValue) => {
												// check if input has space
												if (newInputValue.includes(" ")) return;
												setInputValue(newInputValue);
											}}
											renderInput={(params) => (
												<AppTextField {...params}
													name="name"
													label="Enter Area, Landmark or Hotel Name"
													variant="standard"
													fullWidth
													sx={{
														width: "100%",
													}}
												/>
											)}
											renderOption={(props, option) => {
												return (
													<li {...props} key={option.hotelId}>
														{option.name}
													</li>
												);
											}}
										/>
									</Box>
								</Box>

								{/* Check in and Check out dates */}
								<Box
									sx={{
										mb: 8,
										display: "flex"
									}}
								>
									<Box
										sx={{
											width: "100%",
										}}
									>
										<Box
											component="p"
											sx={{
												fontSize: 14,
												color: "#000",
												fontWeight: Fonts.REGULAR,
												py: 0
											}}
										>
											Check in
										</Box>
										<AppTextField
											sx={{
												width: "100%",
												pr: 2
											}}
											type="date"
											name="checkInDate"
											id="checkInDate"
											variant="standard"
										/>
										<AppDateFiled
											sx={{
												width: "100%",
												pl: 2
											}}
											// type="date"
											name="checkOutDate"
											id="checkOutDate"
											variant="standard"
										/>
									</Box>
									<Box
										sx={{
											width: "100%",
										}}
									>
										<Box
											component="p"
											sx={{
												fontSize: 14,
												color: "#000",
												fontWeight: Fonts.REGULAR,
											}}
										>
											Check out
										</Box>
										<AppTextField
											sx={{
												width: "100%",
												pl: 2
											}}
											name="checkOutDate"
											id="checkOutDate"
											type="date"
											variant="standard"
										/>
									</Box>
								</Box>

								{/* No. of guests, rooms, etc */}
								<Box
									sx={{
										mb: 8,
									}}
								>
									<Box
										component="p"
										sx={{
											fontSize: 14,
											color: "#000",
											fontWeight: Fonts.REGULAR,
										}}
									>
										Search Guest & Rooms
									</Box>
									<Grid container spacing={2} sx={{ mb: { xs: 3, xl: 4 } }}>
										<Grid item xs={12} md={4}>
											<AppTextField
												label="Adults"
												name="noOfAdults"
												id="noOfGuests"
												type="number"
												variant="standard"
											/>
										</Grid>

										<Grid item xs={12} md={4}>
											<AppTextField
												label="Children"
												name="noOfChildren"
												id="noOfChildren"
												type="number"
												variant="standard"
											/>
										</Grid>

										<Grid item xs={12} md={4}>
											<AppTextField
												label="Rooms"
												name="noOfRooms"
												id="noOfRooms"
												type="number"
												variant="standard"
											/>
										</Grid>
									</Grid>
								</Box>

								<Box
									sx={{
										pt: 6
									}}>
									<Button
										variant="contained"
										color="primary"
										disabled={isSubmitting}
										sx={{
											width: "100%",
											height: 44,
											backgroundColor: "#657adc",
										}}
										type="submit"
									>
										Seacrh
									</Button>
								</Box>
							</Form>
						)}
					</Formik>
				</Card>
			</Box>
			<Modal
				open={open}
				onClose={toggleModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modalStyle}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Search Results
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{offers.length} results found

						{offers.length === 0 && (
							<>
								<Box sx={{ mt: 2 }}>
									<Typography>No results found. Try another hotel or checking date!</Typography>
								</Box>
								<Box sx={{ mt: 2 }}>
									<Button
										variant="contained"
										color="primary"
										onClick={toggleModal}
										sx={{
											width: "100%",
											height: 44,
											backgroundColor: "#657adc",
										}}
									>
										Close
									</Button>
								</Box>
							</>
						)}

						{offers.length > 0 && (offers.map(offer =>
							<>
								<List sx={{ width: '100%', maxWidth: 360 }}>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary={offer.room.description.text} secondary={`${offer.price.total} ${offer.price.currency}`} />
									</ListItem>
								</List>
							</>
						))}
					</Typography>
				</Box>
			</Modal>
		</AppAnimate >
	);
};

export default Signup;
