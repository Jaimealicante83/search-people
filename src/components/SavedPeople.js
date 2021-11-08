import React, { useState } from 'react'
import Table from './Table';

const SavedPeople = ({ characterList, selectCharacter }) => {

 
    
    return (
        <div>
            <p>THIS PLACE IS FOR THE FILTERING BUTTONS</p>
        
         {/*USAR CONDITIONAL RENDERING if characterList.length === 0 Show nothing : else show  the underneath line: */}
            {characterList.map((el) => 
            <div>
                <p>{el.name}</p>
                <button onClick={() => selectCharacter(el)}>Show Details</button>
                <button>Remove</button>
            </div> )}
        </div>
    )
}

export default SavedPeople
