import React, { useState } from 'react'
import Table from './Table';
import './SavedPeople.css';

const SavedPeople = ({ characterList, selectCharacter, deleteCharacter, savedCharacter}) => {

    function hideAll(){
        let allCards = document.querySelectorAll('.container_card'), i;
        for (i = 0; i < allCards.length; i++) {
            allCards[i].classList.toggle('hide')
          }
        }

    function hideMales(){
        let maleCards = document.querySelectorAll('.male'), i;
        for (i = 0; i < maleCards.length; i++) {
            if (maleCards[i].classList.contains('male')){
                maleCards[i].classList.toggle('hide')
            }
          }
        }

    function hideFemales(){
        var femaleCards = document.querySelectorAll('.female'), i;
        for (i = 0; i < femaleCards.length; ++i) {
            if (femaleCards[i].classList.contains('female')){
                femaleCards[i].classList.toggle('hide')
            }
          }
        }
       
    return (
        <div className="container_saved_people">
            <h2 className="saved_people_title">Saved people</h2>
            <div className="buttons_container">
                <button onClick={hideAll}>All</button>
                <button onClick={hideMales} >male</button>
                <button onClick={hideFemales}>female</button>
            </div>
                <div className="container_cards">
                {savedCharacter.length === 0 ? ("You didn't save anyone yet!") : 
                  (       
                    characterList.map((el) => 
                    <>
                    { el.name ? (<>
                        <div className={`container_card ${el.gender}`} key={el.name}>
                        <img src={`../img/${el.name}.jpg`} alt={el.name}/>
                        <p>{el.name}</p>
  
                        <button onClick={() => selectCharacter(el)} className="saved_character_button">Show Details</button>
                        <button onClick={() => deleteCharacter(el.name)} className="saved_character_button">Remove</button>
                        </div> 
                    </>
                         ) : (<div className="no_display"></div>) }
                    </>
                    )
                  )}   
                </div>
        </div>
    )
}

export default SavedPeople