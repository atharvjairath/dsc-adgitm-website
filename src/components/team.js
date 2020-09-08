import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Harsh from '../assets/team/Harsh.png'
import Yashvardhan from '../assets/team/Yashvardhan.jpg'
import Shagun from '../assets/team/Shagun.jpg'
import Darshpreet from '../assets/team/Darshpreet.jpg'
import Sanyam from '../assets/team/Sanyam.jpg'
import Athrav from '../assets/team/Athrav.jpg'
import Mohit from '../assets/team/Mohit.png'
import Praveen from '../assets/team/Praveen.jpeg'
import Shubham from '../assets/team/Shubham.jpg'
import Ayanabha from '../assets/team/Ayanabha.jpg'
import Anubhav from '../assets/team/Anubhav.jpg'
import Rajeev from '../assets/team/Rajeev.jpg'
import Uday from '../assets/team/Uday.jpg'

import Ritik from '../assets/team/Ritik.jpg'
import Atishay from '../assets/team/Atishay.jpg'
import Digambar from '../assets/team/Digambar.jpg'
import Nikunj from '../assets/team/Nikunj.jpg'
import Ishika from '../assets/team/Ishika.jpg'
import Vanshika from '../assets/team/Vanshika.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        marginLeft: 5,
    },
    hy: {
        color: '#3b3a39',
    },
    hx: {
        color: '#605e5c',
    }
}));

export default function Team() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h4" className={classes.hy}>
                <b>DSC Lead</b>
            </Typography>
            <br />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Harsh} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Harsh
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Lead
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <br />
            <br />

            <br />
            <br />
            <Typography variant="h5" className={classes.hy}>
                <b>Heads</b>
            </Typography>
            <br />
            <div className={classes.root}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Yashvardhan} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Yashvardhan
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        ML Lead
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Shagun} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Shagun Saboo
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Project Development Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Darshpreet} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Darshpreet Singh
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Project Development Co-Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Sanyam} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Sanyam
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Project Moderator
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Athrav} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Athrav Jairath
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Design and Development Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
            <br />
            <br />

            <br />
            <br />
            <Typography variant="h5" className={classes.hy}>
                <b>Web</b>
            </Typography>
            <br />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Mohit} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Mohit Gupta
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Praveen} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Praveen Chaudhary
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Athrav} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Athrav Jairath
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Shubham} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Shubham Gupta
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Ayanabha} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Ayanabha Paul
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Anubhav} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Anubhav Sharma
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Rajeev} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Rajeev Rajput
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Web
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Uday} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Uday Yadav
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Web Lead
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </div>

            <br />
            <br />
            <br />
            <br />
            <Typography variant="h5" className={classes.hy}>
                <b>Non-Tech</b>
            </Typography>
            <br />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Ritik} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Ritik Jain
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Management Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Atishay} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Atishay
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Marketing Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Digambar} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Digambar Sharma
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Content Development Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Nikunj} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Nikunj
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Management Co-Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Ishika} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Ishika
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Marketing Co-Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={Vanshika} className={classes.large} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" className={classes.hy}>
                                        Vanshika Jain
                                    </Typography>
                                    <Typography gutterBottom className={classes.hx}>
                                        Content Development Co-Head
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
                <br />
                <br />
                <br />
                <br />
            </div>

        </Container>
    );
}