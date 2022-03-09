import Axios from "axios";

const url = "http://localhost:4001/images";

export const uploadImage = async (formData, token) => {
    console.log(token)
    try {
        const result = await Axios.post(url, formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            },

            params: {
                token
            }
        });

        return result.data;
    } catch (err) {
        console.log(err);
    }
};

export const getIamgesData = async (token) => {
    try {
        const result = await Axios.get(url, {
            params: {
                token
            }
        });
        return result.data;
    } catch (err) {
        console.log(err);
    }
};



export const deleteImage = async (id, key) => {
    try {
        await Axios.delete(url, {
            data: { id, key }
        });
        return;
    } catch (err) {
        console.log(err);
    }
};
