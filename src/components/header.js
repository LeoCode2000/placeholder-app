import * as React from "react";
import { Link } from 'gatsby';

const Header = ({ filter }) => {

  return (
    <header>
      <div className="grid sm:grid-cols-none md:grid-cols-3 bg-gray-200 w-full h-14 text-center">
        <div className="row-start-1 md:col-start-1 text-lg font-semibold justify-self-start pt-3">
          <Link className="md:ml-6 p-2 rounded-md bg-blue-500 text-white" to="/">
            Usuarios
          </Link>
        </div>
        <div className="row-start-1 md:col-start-3 float-right justify-self-end md:pr-6 pt-3">
          {filter && <input className="md:pl-1 text-lg" type="text" placeholder="Buscar por nombre..." name="search" onChange={(e) => { filter(e.target.value) }} />}
        </div>
      </div>
    </header>
  );
};
export default Header;
