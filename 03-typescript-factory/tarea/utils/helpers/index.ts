import axios from "axios";

export async function axiosFetch<T>(uri: string): Promise<T> {

    const response = await axios.get<T>(uri);
    return response.data;
}

type UriType = Record<string, string>;

export const QueryUris = (id: string): UriType => ({
    "full-list": "https://rickandmortyapi.com/api/character",
    "single": `https://rickandmortyapi.com/api/character/${id}`,
    "origin": `https://rickandmortyapi.com/api/location/${id}`
});