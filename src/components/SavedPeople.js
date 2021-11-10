import React, { useState } from 'react'
import Table from './Table';
import './SavedPeople.css';

const SavedPeople = ({ characterList, selectCharacter, deleteCharacter, savedCharacter}) => {

    //These functions filter the characters by genre:
    function hideAll(){
        console.log('Hiding all genres')
        let allCards = document.querySelectorAll('.container_card'), i;
        for (i = 0; i < allCards.length; i++) {
            console.log(allCards[i])
            allCards[i].classList.toggle('hide')
          }
        }

    function hideMales(){
        console.log('hiding male characters')
        let maleCards = document.querySelectorAll('.male'), i;
        for (i = 0; i < maleCards.length; i++) {
            console.log(maleCards[i])
            if (maleCards[i].classList.contains('male')){
                maleCards[i].classList.toggle('hide')
            }
            else{
                console.log('there are no male characters')
            }
          }
        }

    function hideFemales(){
        console.log('hiding female characters')
        var femaleCards = document.querySelectorAll('.female'), i;
        for (i = 0; i < femaleCards.length; ++i) {
            console.log(femaleCards[i])
            if (femaleCards[i].classList.contains('female')){
                femaleCards[i].classList.toggle('hide')
            }
            else{
                console.log('there are no female characters')
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
                        <div className={`container_card ${el.gender}`}>
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