import React from "react";
import TableRow from "./TableRow";
import './Table.css';

const Table = ({ datos, setSavedCharacter, selectCharacter, deleteCharacterFromSearch }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth Year</th>
            <th>Eye color</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
       
          {datos.length === 0 ? (
            <tr>
              <td>There is no data</td>
            </tr>
            ) : (
              datos.map((el) => <TableRow key={el.name} el={el} 
              setSavedCharacter={setSavedCharacter} 
              selectCharacter={selectCharacter}
              deleteCharacterFromSearch={deleteCharacterFromSearch}
              /> )
            )}   
        </tbody>
      </table>
    </>
  );
};

export default Table;
