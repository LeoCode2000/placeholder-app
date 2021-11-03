import React, { useEffect, useState } from "react";
import DetailView from "../views/DetailView";


const Detail = ({ location }) => {
  const { state } = location;
  console.log("the state", state);

  const url = "https://jsonplaceholder.typicode.com/users/";

  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch(url + state.id);
      const responsJson = await response.json();
      console.log(responsJson);
      setUser(responsJson);
    } catch (error) {
      console.log("error", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("user", user);

  if (!user) {
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
      <DetailView
        user={user}
      />
    )
  }
}
export default Detail