import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import { Fonts } from "shared/constants/AppEnums";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IntlMessages from "utils/IntlMessages";
import Button from "@mui/material/Button";
// import AppInfoView from "components/info-view";
import AuthWrapper from "./auth-wrapper";
import { useAuthUser } from "utils/AuthHooks";
import { ROUTES } from "utils/routes";
import { useMutation } from "react-query";
import AppLogo from "components/logo";
import { useRouter } from "next/router";
import {
  fetchError,
  fetchStart,
  fetchSuccess,
	showMessage
} from "redux/actions";
import User from "services/user";
import { API_ENDPOINTS } from "utils/api/endpoints";

export interface IEmailVerificationVariables {
	variables: {
		input: { token: string; };
	};
}

const ConfirmSignupView = (props: any) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { user } = useAuthUser();
  const [pin, setPin] = useState("");
  const { messages } = useIntl();
  const [loading, setLoading] = useState<boolean>(false);

	if(user) {
		router.replace(ROUTES.DASHBOARD);
	}

	const mutation = useMutation(({ variables: { input } }: IEmailVerificationVariables) =>
		User.verifyEmail(API_ENDPOINTS.VERIFY_EMAIL, input)
	);

	useEffect(() => {
		const { token } = router.query;
		if (token) {
			mutation.mutate({
				variables: {
					input: {
						token: token as string,
					},
				},
			});
		}
	}, [router.query]);

	// const { confirmUserSignup } = useJWTAuthActions();
  // useEffect(() => {
	// 	// confirmUserSignup(router.query.token as string, '')
	// 	(async () => {
	// 		dispatch(fetchStart());
	// 		try {
	// 			setLoading(true);
	// 			const { data } = await jwtAxios.post("verify-email", { token: router.query.token, code: '' });
	// 			setLoading(false);
	// 			setData(data);

	// 			dispatch(fetchSuccess());
	// 			// router.replace("/signin");
	// 			// dispatch(showMessage(data.msg));	
	// 			// dispatch({
	// 			//   type: SHOW_MESSAGE,
	// 			//   payload:
	// 			//     "Congratulations, Signup process is complete, You can now Sign in by entering correct credentials!",
	// 			// });
	// 		} catch ({ message }) {
	// 			dispatch(fetchError(message as string));
	// 		}
  //   })();
  // }, []);

  // const handleSubmit = () => {
  //   const { email } = props.location.state || {};
  //   if (email && pin.length === 6) {
  //     confirmUserSignup(email, pin);
  //   } else if (!email) {
  //     router.push("/signup");
  //     fetchError(messages["validation.tryAgain"] as string);
  //   } else {
  //     fetchError(messages["validation.pinLength"] as string);
  //   }
  // };

  return (
    <AuthWrapper>
      <Box sx={{ width: "100%" }}>
        {/* <Box
          sx={{
            mb: 5,
            display: "flex",
            alignItems: "center",
						textAlign: 'center'
          }}
        >
          <AppLogo />
        </Box> */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 1.5,
            color: (theme) => theme.palette.text.primary,
            fontWeight: Fonts.SEMI_BOLD,
            fontSize: { xs: 14, xl: 16 },
						textAlign: 'center'
          }}
        >
          <IntlMessages id="common.emailVerification" />
        </Typography>

				{ mutation.isLoading ? (
					<p>Please wait...</p>
				) : (
					<>
						{ mutation.isError ? (
							<>An error occurred: { mutation.error }</>
						) : null }
						{mutation.isSuccess ? 
						(
							<Box
								sx={{
									mb: { xs: 5, xl: 10 },
									fontSize: 18,
									textAlign: 'center'
								}}
							>
								<Typography>
									<IntlMessages id={mutation.data.data.msg} />
								</Typography>
							</Box>
						)
						: 
						null}
					</>
				)}	

				{/* {loading ? (
					<p>Please wait...</p>
				)
				:
					(
						<Box
							sx={{
								mb: { xs: 5, xl: 10 },
								fontSize: 18,
								textAlign: 'center'
							}}
						>
							<Typography>
								<IntlMessages id="common.verificationMessage" />
							</Typography>
						</Box>
					)
				} */}

				<div style={{ justifyContent: 'center', display: 'flex' }}>
					<Button
						variant="contained"
						color="primary"
						sx={{
							minWidth: 160,
							fontWeight: Fonts.REGULAR,
							fontSize: 16,
							textTransform: "capitalize",
							padding: "4px 16px 8px",
							display: "flex",
							alignItems: "center",
							alignSelf: 'center'
						}}
						onClick={() => router.push("/") }
					>
						<IntlMessages id="common.login" />
					</Button>
				</div>

				{/* <AppInfoView /> */}
      </Box>
    </AuthWrapper>
  );
};

export default ConfirmSignupView;
