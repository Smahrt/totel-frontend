import React, { useContext } from 'react';
import { Router } from 'next/router';

import { api } from '../api';
import { USER_LOGIN } from '../StoreUtils'

export const login = async (userInfo, dispatch) => {

	const res = await api(dispatch).post('auth/login', userInfo, USER_LOGIN);
	if (res.ok) {
		Cookies.set('userInfo', JSON.stringify(res));
		Router().push(redirect || `/user/${res._id}`);
	}

}