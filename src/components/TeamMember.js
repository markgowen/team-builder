import React from 'react';
import styled from 'styled-components';

const TeamList = styled.div`
width: 40%;
display: flex;
justify-content: center;
align-items: center;
background: #ecf0f1;
margin: 5% auto;
`;



const TeamMember = props => {
    return (
        <TeamList>
            {props.teamMember.map(member => (
                <div className='team-member' key={member.id}>
                    <h2>{member.name}</h2>
                    <h5>{member.title}</h5>
                </div>
            ))}
        </TeamList>
    )
}

export default TeamMember;