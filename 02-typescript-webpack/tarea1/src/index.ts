//#region Imports
import axios from 'axios';
import { Character } from '../util/types';
import '../resources/styles.css'
//#endregion

const fetchCharacters = async <T>(): Promise<T> => {
    const response = await axios.get<T>('https://rickandmortyapi.com/api/character');
    return response.data;
}

async function getCharacters() {
    const characters = await fetchCharacters<Character>()
    const { info, results } = characters;
    const h1Title = document.getElementById('title');
    const divCharacters = document.getElementById('characters');
    if (h1Title && divCharacters) {
        h1Title.innerText = `Rick And Morty`
        const ul = document.createElement('ul');
        results.forEach(character => {
            const div = document.createElement('div');
            const li = document.createElement('li');
            const charLabel = document.createElement('label');
            const charImg = document.createElement('img');
            charImg.src = character.image;
            charLabel.textContent = character.name;
            li.appendChild(charLabel);
            li.appendChild(charImg);;
            li.classList.add('li-character')
            div.appendChild(li);
            ul.appendChild(div);
            ul.classList.add('list-characters')
        });
        divCharacters.appendChild(ul);
    } else {
        console.error("Elemento 'characters' no encontrado en el DOM.");
    }
}

getCharacters();