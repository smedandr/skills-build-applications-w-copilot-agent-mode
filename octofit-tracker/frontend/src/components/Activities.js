
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const protocol = window.location.protocol;
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const apiUrl = `${protocol}//${codespace}-8000.app.github.dev/api/activities/`;
    console.log('Fetching Activities from:', apiUrl);
    axios.get(apiUrl)
      .then(response => {
        const data = response.data.results ? response.data.results : response.data;
        setActivities(data);
        console.log('Fetched Activities:', data);
      })
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Activities</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, idx) => (
                <tr key={activity.id || idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{activity.name}</td>
                  {/* Add more cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;
