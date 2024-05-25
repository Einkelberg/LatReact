import axios from "axios";

export default async function login(data, callback) {
    try {
        const res = await axios.post("https://fakestoreapi.com/auth/login", data);
        callback(true, res.data.token);
    } catch (error) {
        callback(false, error);
    }
}

