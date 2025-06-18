import axios from 'axios';
import api from '../../lib/api';

const BASE_URI = `${api.defaults.baseURL}`;

export async function get(id) {
    try {
        let response = await axios.get(`${BASE_URI}/students/${id}`);
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

export async function update(newData, id) {
    try {
        let response = await axios.put(`${BASE_URI}/students/${id}`, newData);
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

export async function remove(id) {
    try {
        let response = await axios.delete(`${BASE_URI}/students/${id}`);
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

export async function getCSV() {
    try {
        let response = await axios.get(`${BASE_URI}/students/data/csv`);
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

export async function getContests(id, range) {
    try {
        let response = await axios.get(`${BASE_URI}/codeforces/${id}/contests?range=${range}`);
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

export async function getProblems(id, range) {
    try {
        let response = await axios.get(`${BASE_URI}/${id}/codeforces/problems?range=${range}`);
        console.log(response);
    } catch (err) {
        console.log(err)
    }
}