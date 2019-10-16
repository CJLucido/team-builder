import React, {useState} from 'react';
import './App.css';
import FormComp from "./components/Atoms/Form"
import MemberCard from "./components/Atoms/MemberCard"
import Details from "./components/Organisms/Details"
import styled from "styled-components"

const StyledPage = styled.div`
  background: lightgrey;
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  
`
const StyledH1 = styled.h1`
  width: 100vw;


`

function App() {
   const [teamList, setTeamList] = useState([]);

   const addNewMember = member => {
    setTeamList([...teamList, member])
   }

   const [memberToEdit, setMemberToEdit] = useState([])

   const chooseMember = event => {
     event.preventDefault();
     setMemberToEdit({[event.target.name]:event.target.value})
   }

  return (
    <StyledPage className="App">
     <StyledH1 style={{marginBlockStart: 0}}>"TeamTEAMTEAM, I just love that word"</StyledH1>
     <FormComp addNewMember={addNewMember}/>
     <MemberCard teamList={teamList} chooseMember={chooseMember}/>
     <Details/>
    </StyledPage>
  );
}

export default App;
