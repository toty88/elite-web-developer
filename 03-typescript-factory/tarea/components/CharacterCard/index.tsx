import { Character } from '@/utils/types';
import Link from 'next/link';

interface Props {
    character: Character;
}

const CharacterCard = ({ character }: Props) => {
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden text-center border-8 p-4  border-green-400">
            <div className="font-bold text-4xl mb-3 text-white">{character?.name}</div>
            <div className="rounded-full overflow-hidden border-8 border-green-400 hover:border-green-950">
                <img className="w-full object-cover" src={character?.image} alt={character?.name} />
            </div>
            <div className="px-6 py-4">
                <p className=" text-3xl mb-2 text-black-500 font-extrabold">
                    Status: {character?.status}
                </p>
                <p className=" text-3xl mb-2 text-black-500 font-extrabold">
                    Species: {character?.species}
                </p>
                <p className=" text-3xl mb-2 text-black-500 font-extrabold">
                    Gender: {character?.gender}
                </p>
            </div>
            <div className="flex flex-col justify-center align-middle">
                <span className="px-3 py-1 text-3xl  font-semibold  mr-2 text-white">
                    Origin: {character?.origin?.name}
                </span>
                <span className="mt-2 mr-2 mb-2 px-3 py-1 text-3xl font-semibold text-white">
                    Location: {character?.location?.name}
                </span>
                <Link href='/' className="mb-4 bg-green-400 hover:bg-green-950 text-2xl text-white text-center font-bold py-2 px-4 rounded">
                    Back
                </Link>
            </div>
        </div>
    );
};

export default CharacterCard;

