import Axios from 'axios'


export const subscribeToSite = async (email, password) => {
    try {
        const res = await Axios.post(
            'http://localhost:4001/subscribe',
            { email, password, returnSecureToken: true }
        )

        return {
            token: res.data.token,
            user: { username: res.data.user.username, id: res.data.user.id }
        }

    } catch (err) {
        if (err.response && err.response.status === 400) {
            throw new Error(err.response.data);
        }
    }
}


export const loginToSite = async (email, password) => {
    try {
        console.log('Login trial', email, password)
        const res = await Axios.post(
            'http://localhost:4001/login',
            { email, password, returnSecureToken: true }
        )

        return {
            token: res.data.token,
            user: { username: res.data.user.username, id: res.data.user.id },
        }
    } catch (err) {
        // console.log(err.response)
        if (err.response && err.response.status === 400) {
            throw new Error(err.response.data);
        }
    }
}


export const logOut = async (token) => {
    console.log(token)
    try {
        await Axios.post(
            'http://localhost:4001/logout',
            { token }
        )

    } catch (err) {
        if (err.response && err.response.status === 400) {
            throw new Error(err.response.data);
        }
    }
}


