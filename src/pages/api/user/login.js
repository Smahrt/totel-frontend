import nc from 'next-connect';

import apiLoginRegister from 'components/apiLoginRegister';

const handler = nc();

handler.post(async (req, res) => {
	apiLoginRegister('login', req, res);
});

export default handler;
