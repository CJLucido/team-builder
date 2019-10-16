import React from 'react';
import styled from 'styled-components'

const StyledForm = styled.div`
        background: brown;
        color: white;
        padding: 1vh

`




function MemberCard(props){
    return(
        <div>
            {props.teamList.map( (member, index) =>
                
              {  
               return (
                
                    <StyledForm key={index}>
                    <form onSubmit={props.chooseMember}>
                        <h1>{member.name}</h1>
                        <h4>{member.email}</h4>
                        <h1>{member.role}</h1>
                        <button type="submit">Edit</button>
                    </form>
                    </StyledForm>
                
            )}
            
            )}
        </div>
    )
}


export default MemberCard