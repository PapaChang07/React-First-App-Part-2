import React, {useState} from 'react';
import Table from './Table'
import Form from './Form';

// const characters = [
//     {
//         name: 'Charlie', 
//         job: 'Janitor',
//     },
//     {
//         name: 'Mac', 
//         job: 'Bouncer',
//     },
//     {
//         name: 'Dee', 
//         job: 'Aspiring Actress',
//     },
//     {
//         name: 'Dennis', 
//         job: 'Bartender',
//     },
// ];

function MyApp() { 
    const [characters, setCharacters] = useState([]); 
    
    function removeOneCharacter (index) {
        const updated = characters.filter((character, i) => {
            return i !== index
        });
        setCharacters(updated);
    }

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
            <Form handleSubmit = {updateList}/>
        </div>
    )
    function updateList(person) {
        setCharacters([...characters, person]);
    }

    
}   

export default MyApp;