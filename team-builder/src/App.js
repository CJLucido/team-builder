import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Atoms/Form"

function App() {
   const [teamList, setTeamList] = useState([]);
  return (
    <div className="App">
     <h1>Hello World</h1>
     <Form/>
    </div>
  );
}

export default App;
