import axios from 'axios';

// get user form
export const getUser = param => {
    return axios({
        method: "get",
        url: 'https://reqres.in/api/users',
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const uploadForm = params => {
    return axios({
        method: "post",
        url: 'https://reqres.in/api/users',
        headers: {
            "Content-Type": "application/json"
        },
        data: params
    })
}