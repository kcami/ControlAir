import axios from "axios";
import { RoomCreate } from "../@types/room";
import { useState } from "react";
import { AlertError } from "../components/AlertError";
import { useToast } from "native-base";
import { AlertSucess } from "../components/AlertSucess";
const baseUrl = "http://bore.pub:43245";

export interface RoomsActions {
    get: (roomID?: string) => Promise<void>;
    put: (
        roomID: string,
        putObject: any
    ) => Promise<void>;
    putTemperature: (airconditionerID: string, temperature: number) => Promise<void>
    post: (postObject: any) => Promise<void>;
    delete: (roomID: string) => Promise<void>;
}

const useRoom = (): [boolean, RoomCreate | undefined, RoomsActions] => {
    const [room, setRoom] = useState<RoomCreate>(undefined);
    const [loading, setLoading] = useState(true);
    const toast = useToast()

    async function getRoom(roomID: string) {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.get(`${baseUrl}/get-room/${roomID}`);
                if (response.data) {
                    setRoom(response.data);
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false);
                AlertError(toast, "Não foi possível encontrar o quarto!")
            }
        })
    }

    async function putRoom(
        roomID: string,
        putObject: RoomCreate
    ): Promise<void> {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.put(`${baseUrl}/update-room/${roomID}`,
                    putObject
                );
                if (response.data) {
                    setRoom(response.data);
                    setLoading(false);
                    AlertSucess(toast, "Quarto atualizado com sucesso!")
                }
            } catch (err) {
                setLoading(false);
                AlertError(toast, "Não foi possível atualizar o quarto!")
            }
        });
    }

    async function putTemperature(
        airconditionerID: string,
        putObject: number
    ): Promise<void> {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.put(`${baseUrl}/update-air_conditioner/${airconditionerID}`,
                    putObject
                );
                if (response.data) {
                    setRoom(response.data);
                    setLoading(false);
                    AlertSucess(toast, "Temperatura atualizado com sucesso!")
                }
            } catch (err) {
                setLoading(false);
                AlertError(toast, "Não foi possível atualizar a temperatura!")
            }
        });
    }

    async function postRoom(
        postObject: any
    ) {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.post(`${baseUrl}/create-room`,
                    postObject
                );
                if (response.data) {
                    setRoom(response.data);
                    setLoading(false);
                    AlertSucess(toast, "Quarto criado com sucesso!")
                }
            } catch (err) {
                setLoading(false);
                AlertError(toast, "Não foi possível criar o quarto!")
            }
        });
    }

    async function deleteRoom(
        roomID: string,
    ) {
        await new Promise(async (resolve) => {
            try {
                setLoading(true);
                const response = await axios.delete(`${baseUrl}/delete-room/${roomID}`);
                if (response.data) {
                    setLoading(false);
                    AlertSucess(toast, "Quarto removido com sucesso!")
                }
            } catch (err) {
                setLoading(false);
                AlertError(toast, "Não foi possível remover o quarto!")
            }
        });
    }

    return [
        loading,
        room,
        {
            get: getRoom,
            put: putRoom,
            putTemperature: putTemperature,
            post: postRoom,
            delete: deleteRoom,
        },
    ];
};

export default useRoom;