import React from "react";

const TableRow = ({ el, setSavedCharacter }) => {

  const savingCharacter = (e) => {
    e.preventDefault()
    setSavedCharacter(el);
    console.log('saving this character')
  }
  return (
    <>
      <tr>
        <td>{el.name}</td> 
        <td>{el.gender}</td> 
        <td>{el.birth_year}</td> 
        <td>{el.eye_color}</td> 
        <td>
          <button>Show details</button>
          <button onClick={savingCharacter}>Save</button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;

/* CUANDO LE DEMOS AL BOTÓN DE SHOW DETAILS DEBERÍAMOS EJECUTAR 
UNA FUNCIÓN QUE VENGA DEL PADRE QUE SEA SAVECHARACTER
Y QUE SEA PASADA COMO PROPS, ASI AL EJECUTARLA LA RECOGERÁ
EL COMPONENTE PADRE Y MANDARÁ ESE STATE COMO PROPS AL COMPONENTE
SAVED PEOPLE.*/