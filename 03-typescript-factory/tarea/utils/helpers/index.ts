import axios from "axios";
import { NoFilter, StatusFilter, SpeciesFilter, GenderFilter } from "@/utils/patterns/filterStrategy";
import { Character } from "../types";

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

export const getStrategy = (filterName: string, filterValue: string) => {
    switch (filterName) {
        case 'status':
            return new StatusFilter(filterValue);
        case 'gender':
            return new GenderFilter(filterValue);
        case 'species':
            return new SpeciesFilter(filterValue);
        default:
            return new NoFilter();
    }
}

export const getArrayReduced = <T>(arr: T[], key: string): string[] => {
    return arr.reduce((acc: string[], item: T) => {
        const k = `${item[key as keyof T]}`;
        if (!acc.includes(k)) { acc.push(k) }
        return acc;
    }, []);
};