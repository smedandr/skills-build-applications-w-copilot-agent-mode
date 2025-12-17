import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const protocol = window.location.protocol;
    const codespace = process.env.REACT_APP_CODESPACE_NAME;
    const apiUrl = `${protocol}//${codespace}-8000.app.github.dev/api/users/`;
    console.log('Fetching Users from:', apiUrl);
    axios.get(apiUrl)
      .then(response => {
        const data = response.data.results ? response.data.results : response.data;
        setUsers(data);
        console.log('Fetched Users:', data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item">
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
