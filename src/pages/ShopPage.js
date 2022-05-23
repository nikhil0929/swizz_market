import * as React from 'react';
import { Paper, AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../images/realLogo.png'

const appBarStyle = {
    backgroundColor: "#f7f7f7"
}

const textStyle = {
    color: "#000000"
}

function ShopPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar style={textStyle}>
          <Paper elevation={0} style={{
          }}>
            <img src={Logo} width="100px" height="auto"/>
          </Paper>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ShopPage