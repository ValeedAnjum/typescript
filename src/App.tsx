import {useState} from 'react';
import AddToList from './AddToList';
import './App.css';
import Test from './components/test/Test';
import List from './List';
export interface iState {
  person:{
    name:string,
    age:number,
    img:string,
    note?:string
  }[],
}
function App() {
  const [persons, setPersons] = useState<iState['person']>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://i.pravatar.cc/150?img=53",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://i.pravatar.cc/150?img=54"
    }
  ]);
  
  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List person={persons} />
      <AddToList setPeople={setPersons} people={persons}/>
      <Test test={[{a:2}]} handleChange={e => {
        console.log(e)
      }} />
    </div>
  );
}

export default App;
