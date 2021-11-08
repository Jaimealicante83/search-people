import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";

const SearchPeople = ({setSavedCharacter}) => {
  /* Aqui deberíamos tener los hooks del state y también conectarnos a la API y pasar sus datos al componente hijo (tableRow) a modo de props */
  const [datos, setDatos] = useState([]);
  const [characterName, setCharacterName] = useState(null)

  //Api datos 
  const apiDatos = `https://swapi.dev/api/people/?search=${characterName}`;

  //This will import the API data when the component mounts
  useEffect(() => {
    axios.get(apiDatos).then((res) => {
      let results = res.data;
      setDatos(results.results);
      console.log("el objeto starwars: " + results.results);
    });
  }, [characterName]);


  //Crear una función que se pase a form como props y que recoja el nombre introducido por el usuario
  // en el formulario y se use en la api https://swapi.dev/api/people/?search=${NOMBRE}


  return (
    <div>
      <Form setCharacterName={setCharacterName}/>
      <Table data={datos} setSavedCharacter={setSavedCharacter}/>
    </div>
  );
};

export default SearchPeople;
