import React from 'react'
import {Nav} from 'react-bootstrap'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {
  return (
    <div className>
      <AppBar position="static">
        <Toolbar className="nav">
          <Typography variant="h6">
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Typography>
          <Typography variant="h6">
            <Nav.Link href="/about">About</Nav.Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
