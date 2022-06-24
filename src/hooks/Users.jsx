import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    }
    getUsers();
  });

  return (
    <Fragment>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Users;
