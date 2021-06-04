import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-scroll'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {
  return (
    <div className>
      <AppBar position="static">
        <Toolbar className="nav">
          <Typography variant="h6">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
