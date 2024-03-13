import { Character } from '@/utils/types';
import Link from 'next/link';

interface Props {
    character: Character;
}

const CharacterCard = ({ character }: Props) => {
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden text-center border-8 p-4  border-green-400">
            <div className="font-bold text-4xl mb-3 text-white">{character?.name}</div>
            <img className="w-full rounded-full" src={character?.image} alt={character?.name} />
            <div className="px-6 py-4">
                <p className=" text-base mb-2 text-white">
                    Status: {character?.status}
                </p>
                <p className=" text-base mb-2 text-white">
                    Species: {character?.species}
                </p>
                <p className=" text-base mb-2 text-white">
                    Gender: {character?.gender}
                </p>
            </div>
            <div className="flex flex-col justify-center align-middle">
                <span className="px-3 py-1 text-sm font-semibold  mr-2 text-white">
                    Origin: {character?.origin?.name}
                </span>
                <span className="mt-2 px-3 py-1 text-sm font-semibold  mr-2 text-white">
                    Location: {character?.location?.name}
                </span>
                <Link href='/' className="mb-4 bg-green-400 hover:bg-green-950 text-white text-center font-bold py-2 px-4 rounded">
                    Back
                </Link>
            </div>
        </div>
    );
};

export default CharacterCard;

