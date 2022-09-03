export default async function captcha(recaptchaValue) {
	try {
		// Ping the google recaptcha verify API to verify the captcha code you received
		const captchaResponse = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_PRIVATE}&response=${recaptchaValue}`,
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
				},
				method: 'POST',
			}
		);
		const captchaValidation = await captchaResponse.json();
		/**
     * The structure of response from the veirfy API is
     * {
     *  "success": true|false,
     *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
     *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
     *  "error-codes": [...]        // optional
      }
     */
		if (captchaValidation.success) {
			return {
				status: true,
				message: '',
			};
		} // if (captchaValidation.success)
		else {
			return {
				status: false,
				message: 'Unproccesable request, Invalid captcha code',
			};
		} // if (captchaValidation.success) else
	} catch (error) {
		// try
		// console.log(error);
		return {status: false, message: 'Something went wrong'};
	}
}
