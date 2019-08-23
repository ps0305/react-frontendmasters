import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown';

const SearchParams = () => {
    // if we type in our input and it re-renders, what gets out in the input tag?
    // Well, its value is tied to location and nothing changed that, so it remains the same.
    // In other words, two way data binding is not free in React.
    // I say this is a feature because it makes you explicit on how you handle your data.
    // Let's go make it work.
    // const location = 'Whitefield,BLR';
    const [ location, updateLocation ] = useState('Whitefield,BLR');
    // use pet API from frontend-masters
    const [ animal, AnimalDropdown ] = useDropdown('Animal', 'dog', ANIMALS);
    const [ breed, BreedDropDown, updateBreed ] = useDropdown('Breed', '', breeds);
    const [ breeds, updateBreeds ] = useState([]);

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
            {/* <label htmlFor='animal'>
                Animal
                <select id='animal' value={animal}
                onChange={e => updateAnimal(e.target.value)}
                onBlur={e => updateAnimal(e.target.value)}>
                    <option>All</option>
                    {ANIMALS.map(animal => 
                        <option key={animal} value='animal'>{animal}</option>)}
                </select>
            </label>
            <label htmlFor='breed'>
                Breed
                <select
                disabled={!breed.length}
                id='breed'
                value={breed}
                onChange={e => {updateBreed(e.target.value)}}
                onBlur={e => {updateBreed(e.target.value)}}>
                    <option />
                    {breeds.map(breedStr => {
                        <option
                        key={breedStr}
                        value={breedStr}>{breedStr}</option>
                    })}
                </select>
            </label> */}
            
           </form>
       </div>
   )
};

export default SearchParams;
