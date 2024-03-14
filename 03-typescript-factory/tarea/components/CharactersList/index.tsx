"use client"

import Link from "next/link";
import { useState } from "react";
import { FilterRadio } from "../FilterRadio";
import { PrevIcon, NextIcon } from "@/utils/icons";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { axiosFetch } from "../../utils/helpers";
import { useFilter } from "@/utils/hooks/useFilter";
import { Character, RickMortyApi } from "@/utils/types";
import { getStrategy, getArrayReduced } from "@/utils/helpers";

import { FilterPanel } from "../FilterPanel";


export function CharacterList() {

    const [page, setPage] = useState(1);

    const { data, isLoading, isError, isPlaceholderData } = useQuery({
        queryKey: ['character', page],
        queryFn: () => axiosFetch<RickMortyApi>('https://rickandmortyapi.com/api/character/?page=' + page),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: true
    });
    const characters: Character[] = data?.results ?? [];
    const status = getArrayReduced(characters, 'status');
    const species = getArrayReduced(characters, 'species');
    const gender = getArrayReduced(characters, 'gender');
    const arr = [status, species, gender];
    const { filteredItems, setFilterStrategy } = useFilter(characters);


    if (isLoading) return <h1 className="text-center text-8xl uppercase mb-5">Loading...</h1>;
    if (isError) return <h1>Error</h1>;

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;
        console.log(name, value);
        
        setFilterStrategy(getStrategy(name, value));
    }


    return (
        <div className="w-full">
            <FilterPanel
                setPage={setPage}
                data={data}
                isPlaceholderData={isPlaceholderData}
                radioName={["status", "species", "gender"]}
                radiosValues={[status, species, gender]}
                handleRadioChange={handleRadioChange}
            />
            <div className="flex flex-col flex-wrap">
                <div className="flex flex-wrap justify-center">
                    {
                        filteredItems.map((item: Character) => (
                            <Link key={item.id} href={`/character/${item.id}`}>
                                <div className="m-8 flex flex-col items-center">
                                    <h1 className="mb-4 text-white text-3xl font-bold">{item.name}</h1>
                                    <div className="rounded-full overflow-hidden border-8 border-green-400 hover:border-green-950">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}