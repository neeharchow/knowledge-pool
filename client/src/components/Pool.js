import React from "react";
import styled from "styled-components";

function Pool() {
    return (
        <PoolContainer>
            <PoolList></PoolList>
            <PoolViewer></PoolViewer>
        </PoolContainer>
    );
}

export default Pool;

const PoolContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 100vh;
`;

const PoolList = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 10px;
    width: 30%;
    margin: 5px;

    background-color: #3c7dde;
`;

const PoolViewer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    margin: 5px;
    width: 70%;
    border: solid #3c7dde;
`;
