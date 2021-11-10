import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";
import './SearchPeople.css';


const SearchPeople = ({setSavedCharacter, selectCharacter, datos, setDatos, characterName, setCharacterName}) => {
  /* Aqui deberíamos tener los hooks del state y también conectarnos a la API y pasar sus datos al componente hijo (tableRow) a modo de props */

  //const [characterName, setCharacterName] = useState(null)

  //Api datos 
  const apiDatos = `https://swapi.dev/api/people/?search=${characterName}`;


  //AQUI DEBERIAMOS USAR UNA FUNCION QUE SE EJECUTA AL PULSAR SUBMIT EN VEZ DE SET EFFECT 
  useEffect(() => {
    axios.get(apiDatos).then((res) => {
      let results = res.data;
      setDatos(results.results);
      console.log("el objeto starwars: " + results.results);
    });
  }, [characterName]);

  const deleteCharacterFromSearch = (id) => {
    console.log('el id es ' + id)
    const filterCharacterFromSearch = datos.filter(item => item.name !== id)
    setDatos(filterCharacterFromSearch);
  }


  //Crear una función que se pase a form como props y que recoja el nombre introducido por el usuario
  // en el formulario y se use en la api https://swapi.dev/api/people/?search=${NOMBRE}


  return (
    <div className="search_people_container">
    <h2>Search people</h2>
      <Form setCharacterName={setCharacterName}/>
      <Table 
      datos={datos} 
      setSavedCharacter={setSavedCharacter} 
      selectCharacter={selectCharacter}  
      deleteCharacterFromSearch={deleteCharacterFromSearch}/>
    </div>
  );
};

export default SearchPeople;
