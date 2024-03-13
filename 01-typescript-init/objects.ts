type StringOrNumber = string | number

type TaskProps = {
    id: number;
    name: string;
    completed: boolean;
    description?: string;
}

const val: StringOrNumber[] = ['franco',29]

const tasks : TaskProps[] = [
    {id : 1, name: 'Hacer la tarea del curso 👀', completed: false, description: '.....'},
    {id: 2, name: 'Leer la documentación de Typescript', completed: false},
    {id: 3, name: 'Prepara café', completed: true}
]

tasks.forEach(task => {
    const completedStatus: string = task.completed ? 'Fue completada' : 'No fue completada'
    console.log(`La tarea ${task.id} - ${task.name} ${completedStatus} - ${task.description?.toLowerCase()}`)
})

type UNION_PETS_TYPES = 'dog' | 'cat' | 'horse'

enum PETS_TYPES {
    DOG = 'dog',
    CAT = 'cat',
    HORSE = 'horse'
}


type Pets =  {
    id: number
    name: string
    age: number
    type?: UNION_PETS_TYPES
}

// export type PetsTypes = (typeof PETS_TYPES)[keyof typeof PETS_TYPES];

type Person = {
    name: string
    age: number,
    languages?: string[]
    pets: Pets[]
    eat? : (food: string) => void
}

const fran: Person = {
    name: 'franco',
    age: 29,
    pets: [
        {id: 1, name: 'amazonas', age: 4, type: 'dog'}
    ],
    eat : (food) => console.log('ñam !', food)
}


enum AudioLevel {
    min, // 0
    medium,
    max,
    hyperMax
}

const volume: AudioLevel = AudioLevel.min