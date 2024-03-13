import { Character } from "../types";

export interface Filter {
    filter(characters: Character[]): Character[]
}

export class NoFilter implements Filter {
    constructor() { }

    filter(characters: Character[]): Character[] {
        return characters;
    }
}

export class StatusFilter implements Filter {
    constructor(public status: string) { }

    filter(characters: Character[]): Character[] {
        return characters.filter((item: Character) => item.status.toLowerCase() === this.status);
    }
}

export class GenderFilter implements Filter {
    constructor(public gender: string) { }

    filter(characters: Character[]): Character[] {
        return characters.filter((item: Character) => item.gender.toLowerCase() === this.gender);
    }
}

export class SpeciesFilter implements Filter {
    constructor(public species: string) { }

    filter(characters: Character[]): Character[] {
        return characters.filter((item: Character) => item.species.toLowerCase() === this.species);
    }
}


