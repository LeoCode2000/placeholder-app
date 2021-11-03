import * as React from "react";
import Layout from "../components/layout";
import ListUsers from "../components/listUsers";

const IndexPage = ({ users, filter, usersFiltered }) => {
  return (
    <Layout filter={filter}>
      <main>
        {usersFiltered ?
          usersFiltered.length >= 1 &&
          <ListUsers users={usersFiltered} title="Usuarios Encontrados" />
          : <div className="sm:p-10 sm:pt-15 lg:p-20 text-center "> No hay usuarios que coincidan con el filtro </div>
        }
        <ListUsers users={users} title="Usuarios" />
      </main>
    </Layout >
  );
};


export default IndexPage;
