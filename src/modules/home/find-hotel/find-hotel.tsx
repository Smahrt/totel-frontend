import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Checkbox, useTheme } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import Grid from "@mui/material/Grid";
// import IntlMessages from "utils/IntlMessages";
import Box from "@mui/material/Box";
import { Fonts } from "shared/constants/AppEnums";
import AppAnimate from "components/animate";
import AppTextField from "components/form-components/text-field";
import Divider from '@mui/material/Divider';
// @ts-ignore
// import { useIntl } from "react-intl";

const validationSchema = yup.object({
  name: yup
    .string()
    .required(String("nameRequired")),
  email: yup
    .string()
    .email(String("emailFormat"))
    .required(String("emailRequired")),
});

const Signup = () => {
  const theme = useTheme();
  // const { messages } = useIntl();
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
							}}/>
						<Formik
							validateOnChange={true}
							initialValues={{
								name: "",
								email: "",
							}}
							validationSchema={validationSchema}
							onSubmit={(data, { setErrors, resetForm }) => {
								if (data.name == '') {
									setErrors({
										name: "please enter name",
									});
								} else {
									resetForm();
								}
							}}
							>
							{({ isSubmitting }) => (
								<Form noValidate autoComplete="off">
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
											<AppTextField
												label="Enter Area, Landmark or Hotel Name"
												name="name"
												variant="standard"
												sx={{
													width: "100%",
												}}
											/>
										</Box>
									</Box>

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
												label="Enter Date"
												name="checkinDate"
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
												label="Enter Date"
												name="checkoutDate"
												type="text"
												variant="standard"
											/>
										</Box>
									</Box>

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
										<Box sx={{ mb: { xs: 3, xl: 4 } }}>
											<AppTextField
												label={`Adults | Child | Rooms`}
												name="name"
												variant="standard"
												sx={{
													width: "100%",
												}}
											/>
										</Box>
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
    </AppAnimate>
  );
};

export default Signup;
