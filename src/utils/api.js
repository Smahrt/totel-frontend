import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

import { ERROR } from './StoreUtils'

const baseUrl = 'http://localhost:3000/api/v1/';

export const api = (dispatch) => {

    const userInfo= Cookies.get('userInfo')
		? JSON.parse(Cookies.get('userInfo'))
		: null

    const token = userInfo? { 'Authorization' : userInfo.access_token} : null;

    const post = async(fetchUrl,fetchBody, type) => {
        try {
			console.log(token);
			const res = await fetch(baseUrl + fetchUrl, {
				method: 'POST',
				headers: {
                    'Content-Type': 'application/json',
                    ...token,
                },
				body: JSON.stringify(fetchBody),
			});
			console.log(res);
			if (res.ok) {
                const data = await res.json();
                dispatch({type: type, payload: data});
			} else {
                dispatch({type: ERROR, payload: res.json})
				Swal.fire(
					'Error',
					'There is an error. Please try again later.',
					'error'
				).then ( () => console.log('clicked')) //todo: dispatch null error
			}
			return res;
		} catch (err) {
			console.log(err);
            dispatch({type: ERROR, payload: err})
			return { error: err}
		}
    };

    const get = async(fetchUrl, type) => {
        try {
			const res = await fetch(baseUrl + fetchUrl, {
				method: 'GET',
				headers: {
                    'Content-Type': 'application/json',
                    ...token
                },
			});
			if (res.ok) {
                const data = await res.json();
                dispatch({type: type, payload: data});
			} else {
				Swal.fire(
					'Error',
					'There is an error. Please try again later.',
					'error'
				);
                dispatch({type: ERROR, payload: res.json})
			}
		} catch (err) {
			console.log(err);
            dispatch({type: ERROR, payload: err})
		}
    }

	return {
		post,
		get
	}
};
