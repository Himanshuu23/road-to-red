import axios from 'axios';
import api from '../../lib/api';

const BASE_URI = `${api.defaults.baseURL}/students`;

export async function create(data) {
    try {
        let response = await axios.post(BASE_URI, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(response)
    } catch (err) {
        console.log(err);
    }
}

export async function getAll() {
    try {
        let response = await axios.get(BASE_URI)
        console.log(response)
    } catch (err) {
        console.log(err);
    }
}