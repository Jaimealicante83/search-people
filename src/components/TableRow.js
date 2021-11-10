import React from "react";
import './TableRow.css';

const TableRow = ({ el, setSavedCharacter, selectCharacter, deleteCharacterFromSearch}) => {

  const savingCharacter = (e) => {
    e.preventDefault()
    setSavedCharacter(el);
    deleteCharacterFromSearch(el.name)
    console.log('saving this character')
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
