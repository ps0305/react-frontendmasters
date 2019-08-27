import React from 'react';
import Pet from './Pet';

const Results = () => {
    return (
        <div className="search">
            {!Pet.length ? (
                <h1>No Pets Found !</h1>
            ) : (
                pets.map((pet) => {
                    return (
                        <Pet 
                        animal={pet.type
                        key={pet.id}}
                        />
                    )
                })
            )}
        </div>
    )
}