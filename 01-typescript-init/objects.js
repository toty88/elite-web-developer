"use strict";
const val = ['franco', 29];
const tasks = [
    { id: 1, name: 'Hacer la tarea del curso 👀', completed: false, description: '.....' },
    { id: 2, name: 'Leer la documentación de Typescript', completed: false },
    { id: 3, name: 'Prepara café', completed: true }
];
tasks.forEach(task => {
    var _a;
    const completedStatus = task.completed ? 'Fue completada' : 'No fue completada';
    console.log(`La tarea ${task.id} - ${task.name} ${completedStatus} - ${(_a = task.description) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`);
});
var PETS_TYPES;
(function (PETS_TYPES) {
    PETS_TYPES["DOG"] = "dog";
    PETS_TYPES["CAT"] = "cat";
    PETS_TYPES["HORSE"] = "horse";
})(PETS_TYPES || (PETS_TYPES = {}));
const fran = {
    name: 'franco',
    age: 29,
    pets: [
        { id: 1, name: 'amazonas', age: 4, type: 'dog' }
    ],
    eat: (food) => console.log('ñam !', food)
};
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 0] = "min";
    AudioLevel[AudioLevel["medium"] = 1] = "medium";
    AudioLevel[AudioLevel["max"] = 2] = "max";
    AudioLevel[AudioLevel["hyperMax"] = 3] = "hyperMax";
})(AudioLevel || (AudioLevel = {}));
const volume = AudioLevel.min;
