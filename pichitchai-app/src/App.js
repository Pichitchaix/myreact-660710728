import Goodbye from './goodbye';
import logo from './cry.svg';
import JSXExamples from './components/JSXExamples';
import './App.css';
import Hello from './hello';
function App() {
  return (
    <div className="App">
      <Hello/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>DragonZ</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
      </header>
       
    </div>
  );
}

export default App;
