import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Web test</h1>
      <h3>Play with SWAPPI</h3>

      <section className="section-container">
        <div className="container1">
          <div className="container-search-people">
              <h3>SEARCH PEOPLE (LEFT)</h3>
          </div>
          <div className="container-saved-people">
              <h3>SAVED PEOPLE (LEFT)</h3>
          </div>
        </div>

        <div className="container2">
          <div className="container-information">
              <h3>PEOPLE INFORMATION (RIGHT) </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
