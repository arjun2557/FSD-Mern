import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <AppBar >
          <Toolbar>
              <Typography variant='h6' sx={{ flexGrow: 1 }}  >PRODUCT APPLICATION </Typography>
              <Link to='/home'>
                  <Button variant="contained" color="error">HOME</Button>
              </Link>&nbsp;&nbsp;
              <Link to='/add'>
                  <Button variant="contained" color="error">ADD</Button>
              </Link>&nbsp;&nbsp;
          </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar