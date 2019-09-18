import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.div`
margin: 0 2%;
`;

const Btn = styled.button`
width: 10%;
color: #fff;
background-color: #3498db;
border: none;
font-weight: bold;
`;


const NewTeamMember = props => {
    console.log('props', props);
    const [member, setMember] = useState({ name: '', title: '' });

    const handleChanges = e => {
        console.log(member);
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeamMember(member);
        setMember({ name: '', title: '' });
    };

    return (
        <form onSubmit={submitForm}>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    value={member.name}
                    />
                <label htmlFor='title'>Job Title</label>
                <input
                    id='title'
                    type='text'
                    name='title'
                    onChange={handleChanges}
                    value={member.title}
                    />
                <Btn type='submit'>Add</Btn>
        </form>
    );
};

export default NewTeamMember;