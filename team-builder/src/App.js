import React, {useState} from 'react';
import './App.css';
import Form from "./components/Atoms/Form"
import MemberCard from "./components/Atoms/MemberCard"

function App() {
   const [teamList, setTeamList] = useState([]);

   const addNewMember = member => {
    setTeamList([...teamList, member])
   }

  return (
    <div className="App">
     <h1>Hello World</h1>
     <Form addNewMember={addNewMember}/>
     <MemberCard teamList={teamList}/>
    </div>
  );
}

export default App;
