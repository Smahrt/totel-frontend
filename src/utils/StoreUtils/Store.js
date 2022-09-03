import Cookies from 'js-cookie';
import {createContext, useReducer} from 'react';

import {
	user_login,
	user_logout,
	error
} from './reducers'
import {
	ERROR,
	USER_LOGIN,
	USER_LOGOUT
} from './types'

export const Store = createContext({});

const initialState = {
	userInfo: Cookies.get('userInfo')
		? JSON.parse(Cookies.get('userInfo'))
		: null,
	loading: false,
};

function reducer(state, action) {
	switch (action.type) {
		case USER_LOGIN:
			return user_login(state, action.payload);
		case USER_LOGOUT:
			return user_logout(state, action.payload);
		case ERROR:
			return error(state, action.payload);
		default:
			return state;
	}
}

export function StoreProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = {state, dispatch};
	return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
