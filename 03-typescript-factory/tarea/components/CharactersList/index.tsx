"use client"

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { axiosFetch } from "../../utils/helpers";
import { Character, RickMortyApi } from "@/utils/types";


export function CharacterList() {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['character'],
        queryFn: () => axiosFetch<RickMortyApi>('https://rickandmortyapi.com/api/character')
    });

    const characters: Character[] = data?.results ?? [];

    if (isLoading) return <h1 className="text-center text-8xl uppercase mb-5">Loading...</h1>;
    if (isError) return <h1>Error</h1>;

    return (
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
    )
}