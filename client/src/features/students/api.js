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

        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

/*
0
: 
{_id: '6851740954dfe73c6e39038f', name: 'Alice Johnson', email: 'alice@example.com', phone: '9876543210', codeforcesHandle: 'alice_cf', …}
1
: 
{_id: '685179157b12e5475b6bfa36', name: 'himanshu', email: 'sagarhimanshu472@gmail.com', phone: '8745041266', codeforcesHandle: 'cd_handle', …}
length
: 
2
*/

export async function getAll() {
    try {
        let response = await axios.get(BASE_URI)
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

/*
{name: 'user', phone: '1010101010', codeforcesHandle: 'user@cf', currentRating: 0, maxRating: 0, …}
*/