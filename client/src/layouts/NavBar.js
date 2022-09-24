import React from 'react'
import styled from "styled-components"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function NavBar() {
  return (
    <Bar>
        <Stack style={{justifyContent: "left", marginLeft: "15px"}} spacing={3} direction="row">
            <Button sx={{height: 50}} style={{ color: "white"}} variant="text">Dashboard</Button>
            <Button sx={{height: 50}} style={{ color: "white"}} variant="text">Pools</Button>
            <Button sx={{height: 50}} style={{ color: "white"}} variant="text">Oceans</Button>
        </Stack>
        
    </Bar>
  )
}

export default NavBar

const Bar = styled.div`
    color: black;
    margin: 5px;
    height: 50px;
    border-radius: 20px;
    background-color: #3C7DDE;
    justfy-content: center;
`