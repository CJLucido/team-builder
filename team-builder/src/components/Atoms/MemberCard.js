import React from 'react';


function MemberCard(props){
    return(
        <div>
            {props.teamList.map( (member, index) =>
                
              {  
               return (
                <div key={index}> 
                    <h1>{member.name}</h1>
                    <h4>{member.email}</h4>
                    <h1>{member.role}</h1>
                </div>
            )}
            
            )}
        </div>
    )
}


export default MemberCard