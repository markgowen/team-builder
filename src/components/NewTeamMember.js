import React, { useState } from 'react';

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
            <lablel htmlFor='name'>Name</lablel>
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
            <buttton type='submit'>Add</buttton>
        </form>
    );
};

export default NewTeamMember;