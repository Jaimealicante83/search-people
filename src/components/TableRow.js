import React from "react";
import './TableRow.css';

const TableRow = ({ el, setSavedCharacter, selectCharacter, deleteCharacterFromSearch}) => {

  const savingCharacter = (e) => {
    e.preventDefault()
    if (el.gender === 'male'){
      console.log("El genero es + " + el.genre)
      console.log('es masculino')
    }
    else if (el.gender === 'female') {
      console.log("El genero es + " + el.genre)
      console.log('es femenino')
    }
    setSavedCharacter(el);
    deleteCharacterFromSearch(el.name)
    console.log('saving this character named: ' + el.name)
  }
  return (
    <>
      <tr key={el.name}>
        <td>{el.name}</td> 
        <td>{el.gender}</td> 
        <td>{el.birth_year}</td> 
        <td>{el.eye_color}</td> 
        <td>
          <button onClick={() => selectCharacter(el)}>Show Details</button>
          <button onClick={savingCharacter}>Save</button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
