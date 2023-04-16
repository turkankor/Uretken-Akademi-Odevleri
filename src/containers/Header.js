import React from "react";
import { Link } from "react-router-dom";
import { Container, Divider } from 'semantic-ui-react'

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to={`/`}>
        <h2>Alış-veriş sitesi</h2>
            
        </Link>
      </div>
    </div>
  );
};

export default Header;
