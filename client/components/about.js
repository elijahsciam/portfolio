import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import {Button} from '@material-ui/core'

const About = () => {
  return (
    <div className="card border-white" id="about">
      <h1>
        Fullstack software engineer born from an obsession with decoding and
        translating ancient Chinese literature.
      </h1>
      <img
        className="rounded-circle"
        src="https://media-exp1.licdn.com/dms/image/C5603AQFxpEpPdJMOxA/profile-displayphoto-shrink_200_200/0/1603244088701?e=1623283200&v=beta&t=QhBRLWha5tmQZ1FU7-N8gkaa5tVXMZeR00AtqY2ROWs"
        alt="Card image cap"
      />

      <div className="card-body">
        <h5>Elijah</h5>
        <Button
          size="small"
          color="primary"
          href="https://www.linkedin.com/in/elijahsciam/"
        >
          <LinkedInIcon />
        </Button>
        <Button
          size="small"
          color="primary"
          href="https://github.com/orgs/the-bat-signal/people/elijahsciam"
        >
          <GitHubIcon />
        </Button>
      </div>
    </div>
  )
}

export default About
