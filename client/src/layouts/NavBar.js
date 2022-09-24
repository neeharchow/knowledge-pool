import React from 'react'
import styled from "styled-components"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function NavBar() {
  return (
    <BarContainer>
        <Bar>
            <Stack style={{justifyContent: "center", alignItems: ""}} spacing={3} direction="row">
                <Button style={{ height: "100%", color: "white"}} variant="text">Home</Button>
                <Button style={{ height: "100%", color: "white"}} variant="text">Pools</Button>
                <Button style={{ height: "100%", color: "white"}} variant="text">Oceans</Button>
            </Stack>
        </Bar>
    </BarContainer>
  )
}

export default NavBar

const BarContainer = styled.div`
    align-items: center;
    width: 100%;
    position: relative;
`

const Bar = styled.div`
    color: black;
    margin: 5px;
    height: 50px;
    border-radius: 20px;
    background-color: #3C7DDE;
    justfy-content: center;
`