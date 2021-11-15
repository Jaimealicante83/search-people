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
    setInformationCharacter(el)
  }

  const deleteCharacter = (id) => {
    const returnCharacter = characterList.filter(item => item.name === id)
    const filterCharacter = characterList.filter(item => item.name !== id)
    if (id === characterName) {
       setDatos([...datos, returnCharacter[0]])
    } 
    const returnedCharacter = setSavedCharacter([...characterList, returnCharacter[0]])
    setCharacterList(filterCharacter);
  }

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
