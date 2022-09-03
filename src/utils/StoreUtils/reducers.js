export const user_login = (state, payload) => {
    return {...state, userInfo: payload}
}

export const user_logout = (state, payload) => {
    return {...state, userInfo: null}
}

export const error = (state, payload) => {
    return {...state, error: payload}
}