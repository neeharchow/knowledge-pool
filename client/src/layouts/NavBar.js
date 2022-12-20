import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Bar>
      <Navigation>
        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/drops">Drops</StyledLink>
        <StyledLink to="/pools">Pools</StyledLink>
        <StyledLink to="/oceans">Oceans</StyledLink>
      </Navigation>
    </Bar>
  );
}

export default NavBar;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;

  margin: 5px;
  height: 50px;
  border-radius: 10px;
  background-color: #3c7dde;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  margin: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  font-family: arial;
  font-weight: bold;
  background-color: transparent;
  &:hover {
    background-color: #5988e0;
    cursor: pointer;
  }
`;
