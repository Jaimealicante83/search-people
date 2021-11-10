import React, { useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";
import './SearchPeople.css';

const SearchPeople = ({setSavedCharacter, selectCharacter, datos, setDatos, characterName, setCharacterName}) => {

  //StarWars API url:
  const apiDatos = `https://swapi.dev/api/people/?search=${characterName}`;

  useEffect(() => {
    axios.get(apiDatos).then((res) => {
      let results = res.data;
      setDatos(results.results);
      console.log("The StarWars object is: " + results.results);
    });
  }, [characterName]);

  const deleteCharacterFromSearch = (id) => {
    console.log('The id is: ' + id)
    const filterCharacterFromSearch = datos.filter(item => item.name !== id)
    setDatos(filterCharacterFromSearch);
  }

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
