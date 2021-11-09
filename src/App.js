import './App.css';
import React, { useState, useEffect } from 'react'
import SearchPeople from './components/SearchPeople';
import SavedPeople from './components/SavedPeople';
import Information from './components/Information';

function App() {

  const [savedCharacter, setSavedCharacter] = useState('');
  const [characterList, setCharacterList] = useState([])
  const [informationCharacter, setInformationCharacter] = useState('')
  const [datos, setDatos] = useState([]);


  useEffect(() => {
    setCharacterList([...characterList, savedCharacter])
  }, [savedCharacter]);

  const selectCharacter = (el) => {
    console.log('se ejecuta y traemos ' + el.name)
    setInformationCharacter(el)
  }

  const deleteCharacter = (id) => {
    console.log('el id es ' + id)
    const devolvereste = characterList.filter(item => item.name === id)
    const filterCharacter = characterList.filter(item => item.name !== id)
    const returnedCharacter = setDatos([...datos, devolvereste[0]])
    setCharacterList(filterCharacter);
  }

  return (
    <div className="App">
      <h1>Web test</h1>
      <h3>Play with SWAPPI</h3>

      <section className="section-container">
        <div className="container1">
          <div className="container-search-people">
              <SearchPeople 
              setSavedCharacter={setSavedCharacter} 
              selectCharacter={selectCharacter}
              datos={datos}
              setDatos={setDatos}
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
