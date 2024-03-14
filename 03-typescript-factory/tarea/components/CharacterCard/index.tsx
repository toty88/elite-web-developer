import { Character } from '@/utils/types';
import Link from 'next/link';

interface Props {
    character: Character;
}

const CharacterCard = ({ character }: Props) => {
    return (
        <div className="max-w-md mx-auto rounded overflow-hidden text-center border-8 p-2  border-green-400">
            <div className="font-bold text-4xl mb-3 text-white">
                {character?.name}
            </div>
            <div className="rounded-full overflow-hidden border-8 border-green-400 hover:border-green-950">
                <img className="w-full object-cover" src={character?.image} alt={character?.name} />
            </div>
            <div className="px-6 py-4">
                <p className="mb-4 bg-green-400 text-2xl text-red-600 text-center font-bold py-2 px-4 rounded">
                    Status: {character?.status}
                </p>
                <p className="mb-4 bg-green-400 text-2xl text-red-600 text-center font-bold py-2 px-4 rounded">
                    Species: {character?.species}
                </p>
                <p className="mb-4 bg-green-400 text-2xl text-red-600 text-center font-bold py-2 px-4 rounded">
                    Gender: {character?.gender}
                </p>
            </div>
            <div className="flex flex-col justify-center align-middle">
                <span className="mb-4 bg-green-400 text-xl text-red-600 text-center font-bold py-2 px-4 rounded">
                    Origin: {character?.origin?.name}
                </span>
                <span className="mb-4 bg-green-400 text-xl text-red-600 text-center font-bold py-2 px-4 rounded">
                    Location: {character?.location?.name}
                </span>
                <Link href='/' className="mb-4 bg-green-400 hover:bg-green-950 text-2xl text-white text-center font-bold py-2 px-4 rounded">
                    {"<< Back"}
                </Link>
            </div>
        </div>
    );
};

export default CharacterCard;

