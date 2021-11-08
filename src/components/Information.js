import React from 'react'

const Information = ({ informationCharacter }) => {
    return (
        <div>
            <p>Information about...</p>
            <h4>{informationCharacter.name}</h4>
            <ul>
            <li>Height: {informationCharacter.height}</li>
            <li>Mass: {informationCharacter.mass}</li>
            <li>Hair color: {informationCharacter.hair_color}</li>
            <li>Skin color: {informationCharacter.skin_color}</li>
            <li>Eye color: {informationCharacter.eye_color}</li>
            <li>Birth year: {informationCharacter.birth_year}</li>
            <li>Gender: {informationCharacter.gender}</li>
            </ul>
        </div>
    )
}

export default Information
