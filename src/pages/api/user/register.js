import nc from 'next-connect';

import apiLoginRegister from 'components/apiLoginRegister';

const handler = nc();

handler.post(async (req, res) => {
	apiLoginRegister('register', req, res);
});

export default handler;
