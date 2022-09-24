import React from "react";
import styled from "styled-components";

import Ocean from "../components/Ocean";
import Pool from "../components/Pool";
import Dashboard from "../components/Dashboard";

import { Routes, Route, Link } from "react-router-dom";

function NavBar() {
    return (
        <Bar>
            <Routes>
                <Navigation>
                    <StyledButton>Dashboard</StyledButton>
                    <StyledButton>Pools</StyledButton>
                    <StyledButton>Oceans</StyledButton>
                </Navigation>
                <Route path="/ocean">
                    <Ocean />
                </Route>
                <Route path="/pool">
                    <Pool />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Routes>
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
    border-radius: 15px;
    background-color: #3c7dde;
`;

const StyledButton = styled.button`
    margin: 20px;
    shadow: none;
    border: none;
    border-radius: 5px;
    color: white;
    variant: text;
    background-color: transparent;
    &:hover {
        background-color: #5988e0;
        cursor: pointer;
    }
    &:focus {
        background-color: #7699e0;
    }
`;
