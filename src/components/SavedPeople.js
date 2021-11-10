import React, { useState } from 'react'
import Table from './Table';
import './SavedPeople.css';

const SavedPeople = ({ characterList, selectCharacter, deleteCharacter, savedCharacter}) => {

    return (
        <div className="container_saved_people">
            <h2 className="saved_people_title">Saved people</h2>
            <div className="buttons_container">
                <button>All</button>
                <button>male</button>
                <button>female</button>
            </div>
                <div className="container_cards">
                {savedCharacter.length === 0 ? ("You didn't save anyone yet!") : 
                  (
                    characterList.map((el) => 
                    <>
                    { el.name ? (<>   
                     <div className="container_card">
                        <img src={`../img/${el.name}.jpg`} alt={el.name}/>
                        <p>{el.name}</p>
                        <button onClick={() => selectCharacter(el)} className="saved_character_button">Show Details</button>
                        <button onClick={() => deleteCharacter(el.name)} className="saved_character_button">Remove</button>
                    </div> </>
                         ) : (<div className="no_display"></div>) }
                    
                    </>
                    )
                  )}   
                 </div>
        </div>
    )
}

export default SavedPeople


//Filter male-female-all. function that sets State with filtered array.  gender === 'male' or 'female'