import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
interface iState {
  person:{
    name:string,
    age:number
  }[]
}
function App() {
  const [persons, setPersons] = useState<iState['person']>([]);
  const test = persons.map(person => {
    return person.age = 32
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
