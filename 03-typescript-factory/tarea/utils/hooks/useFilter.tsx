import { signal } from "@preact/signals-react";
import { Character } from "../types";
import { Filter, NoFilter } from "../patterns/filterStrategy";


export const useFilter = (characters: Character[]) => {

    const setFilterStrategy = signal<Filter>(new NoFilter());

    const filteredItems = signal(() => setFilterStrategy.value.filter(characters));

    return { filteredItems, setFilterStrategy }
}