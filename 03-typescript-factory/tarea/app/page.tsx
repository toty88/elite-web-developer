import { CharacterList } from "@/components/CharactersList";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1 className="text-center text-8xl uppercase mb-5 font-rickAndMorty text-green-400 hover:text-green-950">
        Rick and Morty
      </h1>
      <CharacterList />
    </main>
  );
}
