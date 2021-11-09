import React from 'react'
import './Information.css'

const Information = ({ informationCharacter }) => {
    return (<> <h4>Information about...</h4>
       {informationCharacter ? (
                
            <div className="information_container">
                <img src={`../img/${informationCharacter.name}.jpg`} className="informationImage" alt={informationCharacter.name} />
                <h4>{informationCharacter.name}</h4>
                <ul>
                    <li><span className="span_bold">Height:</span> {informationCharacter.height}</li>
                    <li><span className="span_bold">Mass:</span> {informationCharacter.mass}</li>
                    <li><span className="span_bold">Hair color:</span> {informationCharacter.hair_color}</li>
                    <li><span className="span_bold">Skin color:</span> {informationCharacter.skin_color}</li>
                    <li><span className="span_bold">Eye color:</span> {informationCharacter.eye_color}</li>
                    <li><span className="span_bold">Birth year:</span> {informationCharacter.birth_year}</li>
                    <li><span className="span_bold">Gender:</span> {informationCharacter.gender}</li>
                </ul>
            </div>

             ) : (<><h5>Choose someone to get more information about!</h5></>)}
            
             </>)
}

export default Information

/*
*/