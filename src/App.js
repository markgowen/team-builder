import React, { useState} from 'react';
import ReactDom from 'react-dom';
import NewTeamMember from './components/NewTeamMember';
import TeamMember from './components/TeamMember';

import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 0,
      name: 'Mark Gowen',
      title: 'Full Stack Web Developer Student'
    }
  ]);

  const addNewTeamMember = teamMember => {
    const newMember = {
      id: ([]),
      name: teamMember.name,
      title: teamMember.title,
    };
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <h1>Team</h1>
      <NewTeamMember addNewTeamMember={addNewTeamMember} />
      <TeamMember teamMember={teamMember} />
    </div>
  );
}

export default App;
