import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Atoms/Form"

function App() {
   const [teamList, setTeamList] = useState([]);

   const addNewMember = member => {
    setTeamList([...teamList, member])
   }

  return (
    <div className="App">
     <h1>Hello World</h1>
     <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
