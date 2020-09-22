import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import mlBootcamp from "./assets/events/ml-bootcamp.jpg";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 280,
    
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              DSC ADGITM EVENTS
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hamare Events mast hote hai!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    href="https://www.youtube.com/channel/UCWSdOgrUHjM8RBmjxtQTG1A/"
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    Youtube Channel
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={mlBootcamp}
                    title="Bootcamp"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h3" component="h2">
                      𝐃𝐞𝐜𝐢𝐩𝐡𝐞𝐫 𝐃𝐞𝐞𝐩 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠
                    </Typography>
                    <Typography variant="h6">
                      This will be a course consisting of consolidated efforts
                      and lessons that many 𝐭𝐞𝐜𝐡 𝐞𝐧𝐭𝐡𝐮𝐬𝐢𝐚𝐬𝐭𝐬 have learnt over
                      the years and will be presented by individuals who have
                      done Deep Learning courses of Andrew Ng and Fast ai, made
                      awesome projects and are working on research papers.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="large"
                      href="https://www.youtube.com/watch?v=i6N6Lgvjdrk&feature=youtu.be"
                      variant="contained"
                      color="primary"
                    >
                      View Trailer
                    </Button>
                    <Button
                      size="large"
                      href="https://www.youtube.com/watch?v=kTyGBn0TWxQ"
                      variant="contained"
                      color="secondary"
                    >
                      View Session
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
