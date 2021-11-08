import './App.css';
import React, { useState, useEffect } from 'react'
import SearchPeople from './components/SearchPeople';
import SavedPeople from './components/SavedPeople';
import Information from './components/Information';

function App() {

  const [savedCharacter, setSavedCharacter] = useState('');
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    setCharacterList([...characterList, savedCharacter])

  }, [savedCharacter]);

  return (
    <div className="App">
      <h1>Web test</h1>
      <h3>Play with SWAPPI</h3>

      <section className="section-container">
        <div className="container1">
          <div className="container-search-people">
              <h2>Search people</h2>
              <SearchPeople setSavedCharacter={setSavedCharacter}/>
          </div>
          <div className="container-saved-people">
              <h2>Saved people</h2>
              <SavedPeople characterList={characterList}/>
          </div>
        </div>

        <div className="container2">
          <div className="container-information">
              <h2>Information about...</h2>
              <Information />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
