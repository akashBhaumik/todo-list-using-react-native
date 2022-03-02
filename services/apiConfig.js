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