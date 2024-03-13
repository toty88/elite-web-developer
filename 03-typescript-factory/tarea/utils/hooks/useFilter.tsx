import { useState } from "react";
import { Character } from "../types";
import { Filter, NoFilter } from "../patterns/filterStrategy";


export const useFilter = (characters: Character[]) => {

    const [filterStrategy, setFilterStrategy] = useState<Filter>(new NoFilter());

    const filteredItems = () => filterStrategy.filter(characters)

    const changeFilter = (strategy: Filter) => setFilterStrategy(strategy)

    return { filteredItems, changeFilter }
}