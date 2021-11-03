import React, { useEffect, useState } from 'react';
import IndexPage from '../views/IndexView';

export default function IndexController() {

  const url = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [usersFiltered, setUsersFiltered] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const responsJson = await response.json();
      console.log(responsJson);
      setUsers(responsJson);
    } catch (error) {
      console.log("error", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filter = (searched) => {
    var resultSearched = users.filter((user) => {
      if (user.name.toString().toLowerCase().includes(searched.toLowerCase())) {
        return user;
      }
    });
    if (searched === "") {
      setUsersFiltered([]);
    }
    else {
      if (resultSearched.length > 0) {
        setUsersFiltered(resultSearched);
      }
      else {
        setUsersFiltered(null);
      }
    }
  }

  console.log("users", users);

  if (users.length < 1) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    )
  }
  else if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    )
  }
  else {
    return (
      <IndexPage
        filter={filter}
        users={users}
        setUsers={setUsers}
        usersFiltered={usersFiltered}
        setUsersFiltered={setUsersFiltered}
      />
    )
  }
}
