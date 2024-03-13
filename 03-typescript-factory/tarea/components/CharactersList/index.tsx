"use client"

import Link from "next/link";
import { useState } from "react";
import { FilterRadio } from "../FilterRadio";
import { signal } from "@preact/signals-react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { axiosFetch } from "../../utils/helpers";
import { useFilter } from "@/utils/hooks/useFilter";
import { Character, RickMortyApi } from "@/utils/types";
import { getStrategy, getArrayReduced } from "@/utils/helpers";


export function CharacterList() {

    const [page, setPage] = useState(1);

    const { data, isLoading, isError, isPlaceholderData } = useQuery({
        queryKey: ['character', page],
        queryFn: () => axiosFetch<RickMortyApi>('https://rickandmortyapi.com/api/character/?page=' + page),
        placeholderData: keepPreviousData,
    });
    const characters: Character[] = data?.results ?? [];
    const status = getArrayReduced(characters, 'status');
    const species = getArrayReduced(characters, 'species');
    const gender = getArrayReduced(characters, 'gender');

    const { filteredItems, setFilterStrategy } = useFilter(characters);
    const [filteredChars, setFilteredChars] = useState<Character[]>(characters);
    const itemsToShow = filteredChars.length > 0 ? filteredChars : characters;

    if (isLoading) return <h1 className="text-center text-8xl uppercase mb-5">Loading...</h1>;
    if (isError) return <h1>Error</h1>;

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setFilterStrategy.value = getStrategy(name, value);
        setFilteredChars(filteredItems.value());
    }

    return (
        <div className="w-full">
            <div className="flex justify-center  min-w-40">
                <div className="flex  justify-evenly w-1/2">
                <button type="button"
                        className="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none 
                    focus:ring-green-300 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center 
                    dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
                    w-30 h-10 mt-4 mb-4"
                        onClick={() => { if (!isPlaceholderData && data?.info?.prev) { setPage(c => c - 1) } }}
                        disabled={isPlaceholderData || !data?.info?.prev}
                    >
                        PREV
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                    <FilterRadio
                        onClick={handleRadioChange}
                        radioName="status"
                        radioValues={status}
                    />
                    <FilterRadio
                        onClick={handleRadioChange}
                        radioName="species"
                        radioValues={species}
                    />
                    <FilterRadio
                        onClick={handleRadioChange}
                        radioName="gender"
                        radioValues={gender}
                    />
                    <button type="button"
                        className="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none 
                    focus:ring-green-300 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center 
                    dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
                    w-30 h-10 mt-4 mb-4"
                        onClick={() => { if (!isPlaceholderData && data?.info?.next) { setPage(c => c + 1) } }}
                        disabled={isPlaceholderData || !data?.info?.next}
                    >
                        NEXT
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-col flex-wrap">
                <div className="flex flex-wrap justify-center">
                    {
                        itemsToShow.map((item: Character) => (
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
                    d</div>
            </div>



        </div>
    )
}