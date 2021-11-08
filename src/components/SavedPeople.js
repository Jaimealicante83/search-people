import React, { useState } from 'react'
import Table from './Table';

const SavedPeople = ({ characterList }) => {

    
    return (
        <div>
            <p>THIS PLACE IS FOR THE FILTERING BUTTONS</p>
        
         
            {characterList.map((el) => el.name )}
        </div>
    )
}

export default SavedPeople
