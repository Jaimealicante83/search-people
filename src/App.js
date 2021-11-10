import './App.css';
import React, { useState, useEffect } from 'react'
import SearchPeople from './components/SearchPeople';
import SavedPeople from './components/SavedPeople';
import Information from './components/Information';

function App() {

  const [datos, setDatos] = useState([]);
  const [savedCharacter, setSavedCharacter] = useState('');
  const [characterList, setCharacterList] = useState([])
  const [informationCharacter, setInformationCharacter] = useState('')
  const [characterName, setCharacterName] = useState(null)


  useEffect(() => {
    setCharacterList([...characterList, savedCharacter])
  }, [savedCharacter]);

  const selectCharacter = (el) => {
    console.log('We bring the following character ' + el.name)
    setInformationCharacter(el)
  }

  const deleteCharacter = (id) => {
    console.log('The selected id is: ' + id)
    const returnCharacter = characterList.filter(item => item.name === id)
    const filterCharacter = characterList.filter(item => item.name !== id)
    if (id === characterName) {
       console.log('The name is equal to the input value');
       setDatos([...datos, returnCharacter[0]])
    }  else { console.log('it could not be returned') }  
    const returnedCharacter = setSavedCharacter([...characterList, returnCharacter[0]])
    setCharacterList(filterCharacter);
  }

  //Usar setCharacterList para filtrar male female y all

  return (
    <div className="App">
      <header>
        <h1>Web test</h1>
        <h3>Play with SWAPPI</h3>
      </header>

      <section className="section-container">
        <div className="container1">
          <div className="container-search-people">
              <SearchPeople 
              setSavedCharacter={setSavedCharacter} 
              selectCharacter={selectCharacter}
              datos={datos}
              setDatos={setDatos}
              characterName={characterName}
              setCharacterName={setCharacterName}
              />
          </div>
          <div className="container-saved-people">
              <SavedPeople 
              characterList={characterList}
              selectCharacter={selectCharacter}
              deleteCharacter={deleteCharacter} 
              savedCharacter={savedCharacter}
              />
          </div>
        </div>

        <div className="container2">
          <div className="container-information">
              <Information informationCharacter={informationCharacter}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
