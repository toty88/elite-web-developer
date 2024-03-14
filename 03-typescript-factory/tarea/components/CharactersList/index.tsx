"use client"

import Link from "next/link";
import { FilterPanel } from "../FilterPanel";
import { axiosFetch } from "../../utils/helpers";
import { useFilter } from "@/utils/hooks/useFilter";
import { Character, RickMortyApi } from "@/utils/types";
import { useCurrentPageStore } from "../store/currentPage";
import { getStrategy, getArrayReduced } from "@/utils/helpers";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function CharacterList() {

    const page = useCurrentPageStore(state => state.currentPage);
    const setPage = useCurrentPageStore(state => state.setCurrentPage);
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
    const { filteredItems, setFilterStrategy } = useFilter(characters);


    if (isLoading) return <h1 className="text-center text-7xl text-white mb-5">Loading...</h1>;
    if (isError) return <h1 className="text-center text-7xl text-white mb-5">Error</h1>;

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;
        console.log(name, value);

        setFilterStrategy(getStrategy(name, value));
    }


    return (
        <div className="w-full">
            <FilterPanel
                page={page}
                data={data}
                setPage={setPage}
                isPlaceholderData={isPlaceholderData}
                handleRadioChange={handleRadioChange}
                radiosValues={[status, species, gender]}
                radioName={["status", "species", "gender"]}
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