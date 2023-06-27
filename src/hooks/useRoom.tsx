import axios from "axios";
import { RoomCreate } from "../@types/room";
import { useState } from "react";
import { AlertError } from "../components/AlertError";
import { useToast } from "native-base";
const baseUrl = "http://bore.pub:45220";

export interface RoomsActions {
    get: (roomID?: number) => Promise<void>;
    put: (
        roomID: number,
        putObject: any
    ) => Promise<void>;
    post: (roomID: number, postObject: any) => Promise<void>;
    delete: (roomID: number) => Promise<void>;
}

const useRoom = (): [boolean, RoomCreate | undefined, RoomsActions] => {
    const [room, setRomm] = useState<RoomCreate>(undefined);
    const [loading, setLoading] = useState(true);
    const toast = useToast()

    async function getRoom(roomID: number) {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseUrl}/get-room/${roomID}`);
                if (response.data) {
                    setRomm(response.data);
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false);
                AlertError(toast, "GET ROOM WAS NOT POSSIBLE")
            }
        })
    }

    async function putRoom(
        roomID: number,
        putObject: RoomCreate
    ): Promise<void> {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.put(`${baseUrl}/get-room/${roomID}`,
                    putObject
                );
                if (response.data) {
                    setRomm(response.data);
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false);
                AlertError(toast, "PUT ROOM WAS NOT POSSIBLE")
            }
        });
    }

    async function postRoom(
        postObject: any
    ) {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.post(`${baseUrl}/get-room`,
                    postObject
                );
                if (response.data) {
                    setRomm(response.data);
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false);
                AlertError(toast, "POST ROOM WAS NOT POSSIBLE")
            }
        });
    }

    async function deleteRoom(
        roomID: number,
    ) {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.delete(`${baseUrl}/get-room/${roomID}`);
                if (response.data) {
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false);
                AlertError(toast, "DELETE ROOM WAS NOT POSSIBLE")
            }
        });
    }

    return [
        loading,
        room,
        {
            get: getRoom,
            put: putRoom,
            post: postRoom,
            delete: deleteRoom,
        },
    ];
};

export default useRoom;