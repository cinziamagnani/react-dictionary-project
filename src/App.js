import './App.css';
import logo from "./logoshecodes-logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} alt="SheCodes logo" className="App-logo img-fluid"/>
      </header>
      <main>
        <Dictionary />
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
