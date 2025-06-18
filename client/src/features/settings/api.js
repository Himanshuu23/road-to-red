import axios from 'axios';
import api from '../../lib/api';

const BASE_URI = `${api.defaults.baseURL}/codeforces`;

export async function sync(id) {
    try {
        let response = await axios.post(`${BASE_URI}/sync`, id, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(response)
    } catch (err) {
        console.log(err);
    }
}

export async function syncAll() {
    try {
        let response = await axios.post(`${BASE_URI}/sync/all`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(response)
    } catch (err) {
        console.log(err);
    }
}

export async function settings(data) {
    try {
        let response = await axios.put(`${BASE_URI}/sync/settings`, data);
        console.log(response);
    } catch (err) {
        console.log(err)
    }
}

export async function detect() {
    try {
        let response = await axios.get(`${BASE_URI}/students/check/inactivity`);
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}