import axios from "axios";
import { AlertError } from "../components/AlertError";
const baseUrl = "http://bore.pub:34843/";

// Invoking the get method to perform a GET request
export async function getRooms() {
    return await axios.get(`${baseUrl}/get-rooms`);
}
