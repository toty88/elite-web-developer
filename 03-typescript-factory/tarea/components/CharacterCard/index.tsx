import { Character } from '@/utils/types';
import Link from 'next/link';

interface Props {
    character: Character;
}

const CharacterCard = ({ character }: Props) => {
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden text-center">
            <div className="font-bold text-4xl mb-3">{character?.name}</div>
            <img className="w-full" src={character?.image} alt={character?.name} />
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base mb-2">
                    Status: {character?.status}
                </p>
                <p className="text-gray-700 text-base mb-2">
                    Species: {character?.species}
                </p>
                <p className="text-gray-700 text-base mb-2">
                    Gender: {character?.gender}
                </p>
            </div>
            <div className="flex flex-col justify-center align-middle">
                <span className="px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    Origin: {character?.origin?.name}
                </span>
                <span className="mt-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    Location: {character?.location?.name}
                </span>
                <Link href='/' className="mb-4 bg-gray-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded">
                    Back
                </Link>
            </div>
        </div>
    );
};

export default CharacterCard;

