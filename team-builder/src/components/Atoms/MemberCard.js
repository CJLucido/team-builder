import React from 'react';


function MemberCard(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h4>{props.email}</h4>
            <h1>{props.role}</h1>
        </div>
    )
}


export default MemberCard