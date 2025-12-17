import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const protocol = window.location.protocol;
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const apiUrl = `${protocol}//${codespace}-8000.app.github.dev/api/teams/`;
    console.log('Fetching Teams from:', apiUrl);
    axios.get(apiUrl)
      .then(response => {
        const data = response.data.results ? response.data.results : response.data;
        setTeams(data);
        console.log('Fetched Teams:', data);
      })
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map(team => (
          <li key={team.id} className="list-group-item">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
