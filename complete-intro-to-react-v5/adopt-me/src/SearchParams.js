import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
    // if we type in our input and it re-renders, what gets out in the input tag?
    // Well, its value is tied to location and nothing changed that, so it remains the same.
    // In other words, two way data binding is not free in React.
    // I say this is a feature because it makes you explicit on how you handle your data.
    // Let's go make it work.
    // const location = 'Whitefield,BLR';
    
    // SEQUENCE IS NECCESSARY
    const [ location, updateLocation ] = useState('Whitefield,BLR');
    const [ breeds, updateBreeds ] = useState([]);
    // use pet API from frontend-masters
    const [ animal, AnimalDropdown ] = useDropdown('Animal', 'dog', ANIMALS);
    const [ breed, BreedDropDown, updateBreed ] = useDropdown('Breed', '', breeds);
    
    useEffect(() => {
        updateBreed([]);
        updateBreed('');
        pet.breeds(animal).then(({ breeds }) => {
            const breedStr = breeds.map(({ name }) => name )
            updateBreeds(breedStr);
        }, console.error);
    }, [animal, updateBreed])

   return (
       <div className="search-params">
           <form>
            <label htmlFor='location'>Location
                <input
                id='location'
                value={location}
                placeholder='Location'
                onChange={e => updateLocation(e.target.value)}/>
            </label>
            <AnimalDropdown />
            <BreedDropDown />
            <button>Submit</button>
           </form>
       </div>
   )
};

export default SearchParams;
