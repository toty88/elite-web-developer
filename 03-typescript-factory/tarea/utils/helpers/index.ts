import axios from "axios";

export async function axiosFetch<T>(uri: string): Promise<T> {

    const response = await axios.get<T>(uri);
    return response.data;
}