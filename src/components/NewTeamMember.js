import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    width: '500px',
    backgroundColor: `#ecf0f1`,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '1%',
    margin: 'auto'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const Btn = styled.button`
  width: 65px;
  color: #fff;
  background-color: #3498db;
  border: none;
  font-weight: bold;
  font-size: 14px;
`;

const NewTeamMember = props => {
  const classes = useStyles();

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
    <form className={classes.container} onSubmit={submitForm}>
      <label htmlFor="name"></label>
      <TextField
        className={classes.textField}
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
        placeholder="enter name"
      />
      <label htmlFor="title"></label>
      <TextField
        className={classes.textField}
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        value={member.title}
        placeholder="enter title"
      />
      <Btn type="submit">Add</Btn>
    </form>
  );
};

export default NewTeamMember;
