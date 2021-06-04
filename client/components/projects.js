import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

const Projects = () => {
  const classes = useStyles()

  return (
    <div className="cards" id="projects">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.ibb.co/dj1FbTj/rooted-06.jpg"
            title="rooted"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              rooted
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Promote, preserve, and protect Indigenous languages, histories,
              and cultures.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://rooted-4da8a.web.app/">Website</a>
          </Button>
          <Button size="small" color="primary">
            <a href="https://github.com/the-bat-signal/rooted">Repository</a>
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            style={{height: 140, width: 500}}
            image="https://github.com/elijahsciam/Chinese-English-Dictionary/raw/npm/info.png"
            title="Chinese-English Dictionary"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Chinese-English Dictionary
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A Chinese-English Dictionary for developers! Constantly working on
              new features.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://github.com/elijahsciam/Chinese-English-Dictionary/tree/npm">
              Repository
            </a>
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            style={{height: 140, width: 500}}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ6TjjZlNL1X6yug3xJcOzMNx2K2hByEH9g&usqp=CAU"
            title="Chinese-English Dictionary"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Real-Time Calculator
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A simple calculator built with React, Postgres, and Socket.io to
              update calculations real-time
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://elijah-sciammas-calculator.herokuapp.com/">
              Website
            </a>
          </Button>
          <Button size="small" color="primary">
            <a href="https://github.com/elijahsciam/Calculator-Sezzle">
              Repository
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Projects
