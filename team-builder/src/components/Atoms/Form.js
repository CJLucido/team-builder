import React, {useState} from "react";



function Form(props){
    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
    });

const submitForm = event => {
    event.preventDefault();
    props.addNewMember(teamMember)
    setTeamMember({
        name: "",
        email: "",
        role: ""
    })
}

    return (
    <div>
        <h1>Form</h1>
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" placeholder="Type your name here" type="text"/>

            <label htmlFor="email">Email: </label>
            <input id="email" name="email" placeholder="Type your email here" type="text"/>

            <label htmlFor="role">Position: </label>
            <input id="role" name="role" placeholder="Type your role here" type="text"/>
        </form>
    </div>
    )
}


export default Form