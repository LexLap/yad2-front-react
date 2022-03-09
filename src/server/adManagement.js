const Axios = require('axios')


export const publishAdRequest = async (data) => {
    try {
        const response = await Axios.post(
            'http://localhost:4001/ads',
            data
        )
        return response
    } catch (error) { throw error }
}


export const getAdsToDisplay = async (data) => {
    console.log('requesting ads', data)
    try {
        const response = await Axios.post(
            'http://localhost:4001/ads/get-ads',
            data
        )
        return response
    } catch (error) { throw error }
}