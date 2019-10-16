import React from "react";


function Form(){

    return (
    <div>
        <h1>Form</h1>

        <label htmlFor="name">Name: </label>
        <input id="name" name="name" placeholder="Type your name here" type="text"/>

        <label htmlFor="email">Email: </label>
        <input id="email" name="email" placeholder="Type your email here" type="text"/>

        <label htmlFor="role">Position: </label>
        <input id="role" name="role" placeholder="Type your role here" type="text"/>
        
    </div>
    )
}


export default Form