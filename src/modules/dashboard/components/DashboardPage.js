import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import logo from '../../control-panel/assets/logo.png';
import Grid from 'material-ui/Grid';
import Helmet from 'react-helmet';


const styles = {
  card: {
    padding: 15,
    margin: 15,
  },
  media: {
    height: 300,
  },
};

class Dashboard extends Component {
  render () {
    const { classes } = this.props;
    return (
      <Grid container>
        <Helmet>
          <title>Titan Track</title>
        </Helmet>
        <Grid item sm={12} lg={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={logo}
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Welcome
              </Typography>
              <Typography component="p">
                {`Titan Track is an open source project, in its path to become the ultimate self improvement platform.`} Check out our <a target="_BLANK_" href="https://github.com/TitanTrack/titan-track">GitHub</a>, or come say hi at our <a target="_BLANK_" href="https://gitter.im/titan-track/Lobby">Gitter</a>.
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                What's the mission?
              </Typography>
              <Typography component="p">
                {`We believe that the self-help industry is broken, and that it can be fixed with open source code.`}
              </Typography>
            </CardContent>
          </Card>


          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                What's the plan?
              </Typography>
              <Typography component="p">
                {`The goal of Titan Track is to create a set of tools that will act as an Operating System for self improvement. These versatile tools will act as a basis for a variety of self improvement solutions. `}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} lg={4}>

          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                Why's there nothing here?
              </Typography>
              <Typography component="p">
                {`Good question. Titan Track started out as a health tracking company. After dumping 2 months on the project, we realized that the space was extremely crowded and didn't really need us. That's when we decided to change direction, and came up with the current project. We lost a lot of time, but learned some pretty cool stuff.`}
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                What do you have so far?
              </Typography>
              <Typography component="p">
                {`Check out the links on the sidenav. As we build more tools, we'll put them on display there. For the time being, we only have todos and trackers, and they are still a work in progress. Feel free to try them out to get a feel for them.`}
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2">
                What can I do now?
              </Typography>
              <Typography component="p">
                {`If you also believe that the self-help industry is broken, and if you want to help fix it, fill the form and let us get in touch with you.`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} lg={4}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedJSen0j_Czx-JCQR0c6YGdW9ivCOJVYVnF7H_3hbPpCwpsA/viewform?embedded=true" width="500" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Dashboard);
