import axios from "axios";

export default async function movie(data, callback) {
    try {
        const res = await axios.post("https://jkblc-frontend-api.vercel.app/jkb/movies", data);
        callback(true, res.data.token);
    } catch (error) {
        callback(false, error);
    }
}