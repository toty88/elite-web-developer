"use client"

import Link from "next/link";
import { FilterRadio } from "../FilterRadio";
import { useQuery } from "@tanstack/react-query";
import { axiosFetch } from "../../utils/helpers";
import { useFilter } from "@/utils/hooks/useFilter";
import { Character, RickMortyApi } from "@/utils/types";
import { Filter, NoFilter, StatusFilter, SpeciesFilter, GenderFilter } from "@/utils/patterns/filterStrategy";


export function CharacterList() {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['character'],
        queryFn: () => axiosFetch<RickMortyApi>('https://rickandmortyapi.com/api/character')
    });

    const characters: Character[] = data?.results ?? [];
    const { filteredItems, changeFilter } = useFilter(characters);

    if (isLoading) return <h1 className="text-center text-8xl uppercase mb-5">Loading...</h1>;
    if (isError) return <h1>Error</h1>;

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // const name = e.target.name;
        changeFilter(new StatusFilter(value));
        console.log(filteredItems);
        
    }

    return (
        <div className="flex flex-col flex-wrap">
            <FilterRadio onClick={handleRadioChange}/>
            <div className="flex flex-wrap justify-evenly">
            {
                
                data && characters.map((item: Character) => (
                    <div key={item.id} className="m-8 flex flex-col items-center">
                        <h1 className="mb-4 text-white text-3xl font-bold">{item.name}</h1>
                        <div className="rounded-full overflow-hidden border-8 border-green-400 hover:border-green-950">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <Link href={`/character/${item.id}`}
                            className="mt-2 bg-green-400 hover:bg-green-950 text-white font-bold py-2 px-4 rounded">
                            Details
                        </Link>
                    </div>
                ))
            }
                </div>
        </div>
    )
}