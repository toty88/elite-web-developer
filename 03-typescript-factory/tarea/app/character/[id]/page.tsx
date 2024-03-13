"use client"

import { Character } from "@/utils/types";
import { useParams } from 'next/navigation';
import { axiosFetch } from "@/utils/helpers";
import { useQuery } from "@tanstack/react-query";
import CharacterCard from '@/components/CharacterCard';

const CharacterPage = () => {

    const { id } = useParams();
    const { data, isLoading, isError } = useQuery({
        queryKey: ['character'],
        queryFn: () => axiosFetch<Character>(`https://rickandmortyapi.com/api/character/${id}`)
    });

    if (isError) return <h1>Error</h1>;

    return (
        <div className='flex flex-col justify-center align-middle mt-5'>
            {
                isLoading
                    ? <h1>Loading...</h1>
                    : data && <CharacterCard character={data} />
            }
        </div>
    )
}

export default CharacterPage