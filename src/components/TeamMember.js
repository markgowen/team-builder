import React from 'react';

const TeamMember = props => {
    return (
        <div className='team-list'>
            {props.teamMember.map(member => (
                <div className='team-member' key={member.id}>
                    <h2>{member.name}</h2>
                    <h5>{member.title}</h5>
                </div>
            ))}
        </div>
    )
}

export default TeamMember;