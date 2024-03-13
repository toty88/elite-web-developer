type MaybeId = string | number | undefined

export interface Product {
    id: MaybeId,
    name: string
}

export type Hero = {
  name?: string;
  age: number;
  powers: string[];
  fight: () => void;
};

export type SideKick = Hero & {
    weaknesses : string[]
}

export const robin : SideKick = {
    age: 29,
    powers: [''],
    fight: () => console.info('peleo al lado de batman'),
    weaknesses: ['muchas debilidades 🚀', 'vos bb']
}


export interface Person {
  name: string;
  lastname: string;
  eat: () => void;
}

export interface Dev extends Person {
  code?: () => void;
}

// override
export interface Dev {
    debug: () => void
    favoriteLanguages? : string[]
}

const batman: Hero = {
  name: "bruno",
  age: 40,
  powers: ["money"],
  fight: () => console.info("a pelear por la justicia"),
};
