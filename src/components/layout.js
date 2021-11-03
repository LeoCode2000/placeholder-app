import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header.js";

const Layout = ({ children, filter }) => {
  return (
    <>
      <Header filter={filter} />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
