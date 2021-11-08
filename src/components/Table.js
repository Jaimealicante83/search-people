import React from "react";
import TableRow from "./TableRow";

const Table = ({ data, setSavedCharacter }) => {
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
       
          {data.length === 0 ? (
            <tr>
              <td>There is no data</td>
            </tr>
          ) : (
            data.map((el) => <TableRow key={el} el={el} setSavedCharacter={setSavedCharacter}/> )
          )}   
        </tbody>
      </table>
    </>
  );
};

export default Table;
