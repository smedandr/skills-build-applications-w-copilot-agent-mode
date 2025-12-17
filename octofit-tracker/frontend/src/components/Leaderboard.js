import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const protocol = window.location.protocol;
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const apiUrl = `${protocol}//${codespace}-8000.app.github.dev/api/leaderboard/`;
    console.log('Fetching Leaderboard from:', apiUrl);
    axios.get(apiUrl)
      .then(response => {
        const data = response.data.results ? response.data.results : response.data;
        setLeaders(data);
        console.log('Fetched Leaderboard:', data);
      })
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <ul className="list-group">
        {leaders.map(user => (
          <li key={user.id} className="list-group-item">
            {user.username}: {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
