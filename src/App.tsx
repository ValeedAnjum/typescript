import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [persons, setPersons] = useState([
    {name:"Valeed Anjum",url:"",age:23,note:"I am note 1"},
    {name:"Valeed Anjum",url:"",age:23},
  ]);
  persons.map(person => {
    person.name = 'This must be string'
  })
  return (
    <div className="App">
      <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
        <p>
                   Edit <code>src/App.tsx</code> and save to reload.
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
