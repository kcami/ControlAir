import axios from "axios";
import { useState } from "react";
import { AlertError } from "../components/AlertError";
import { useToast } from "native-base";
const baseUrl = "http://bore.pub:43245";

// Invoking the get method to perform a GET request
const useRooms = (): [boolean, any[] | [], { get: () => Promise<void> }] => {
    const [rooms, setRomms] = useState([]);
    const [loading, setLoading] = useState(true);
    const toast = useToast()

    async function getRooms(): Promise<void> {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseUrl}/get-rooms`);
                if (response.data) {
                    setRomms(response.data);
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false);
                AlertError(toast, "GET ROOMS WAS NOT POSSIBLE")
            }
        })
    }

    return [
        loading,
        rooms,
        {
            get: getRooms,
        },
    ];
}

export default useRooms;