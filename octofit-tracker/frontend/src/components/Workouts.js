import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const protocol = window.location.protocol;
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const apiUrl = `${protocol}//${codespace}-8000.app.github.dev/api/workouts/`;
    console.log('Fetching Workouts from:', apiUrl);
    axios.get(apiUrl)
      .then(response => {
        const data = response.data.results ? response.data.results : response.data;
        setWorkouts(data);
        console.log('Fetched Workouts:', data);
      })
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Workouts</h2>
      <ul className="list-group">
        {workouts.map(workout => (
          <li key={workout.id} className="list-group-item">
            {workout.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
