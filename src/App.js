import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1><em>words</em>meanings</h1>
      </header>
      <main>
        <Dictionary defaultKeyword='sunset'/>
      </main>
      <footer className="App-footer">
        <small>
        <a href="https://github.com/cinziamagnani/react-dictionary-project">
          Open-source code
        </a> by   
        <a href="https://cinziamagnani.com/">
           Cinzia Magnani
        </a>
        </small>
      </footer>
      </div>
    </div>
  );
}

export default App;
