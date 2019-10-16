import React, {useState} from "react";
import styled from 'styled-components'
import {Formik, Field, Form, ErrorMessage} from "formik"

const validate = ({name, email, role}) => {
    const errors = {};

    if(!name){
        errors.name = "You need a name!"
    }else if (name.includes(/\d+/)){
        errors.name = "You don't have numbers in your name!"
    }

    if(!email){
        errors.email = "You need a email!"
    }else if (email.length < 5){
        errors.name = "You don't have such a small email!"
    }
    
    if(!role){
        errors.role = "You need a job!"
    }

    return errors
}


function Details(props){
    return(
        <Formik
            
            onSubmit={(values, tools) => {
                console.log(values, tools)
                tools.resetForm();
                alert(`${values.name} is a ${values.role}, message them at ${values.email}`)
            }}
            validate={validate}
            initialValues={{name:"", email:'', role:""}}
            render={props =>{
                console.log(props)
                return(
                    <Form>
                        <Field name='name' type="text" placeholder="enter name"/>
                        <ErrorMessage name='name' component='div' className='red'/>
                        <Field name='email' type="text" placeholder="enter email"/>
                        <ErrorMessage name='email' component='div' className='red'/>
                        <Field name='role' type="text" placeholder="enter role"/>
                        <ErrorMessage name='role' component='div' className='red'/>
                        <input type='submit'/>
                    </Form>
                )
            }}
            />
    )




}


export default Details