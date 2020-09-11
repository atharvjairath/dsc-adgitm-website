import React from 'react';
import { Grid, makeStyles, Button, Container,} from '@material-ui/core'; 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Blogimage from '../assets/blog.jpg';
// import className from 'className';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
      // alignSelf:'center'
      height:450,
      marginBottom:"40px",
    },
    media: {
      paddingTop: '56.25%', // 16:9
    },
    heading:{
        fontFamily:'babel',
        paddingTop:'50px',
        paddingBottom:'50px',
    },
    button:{
        marginLeft:"45%",
        marginRight:"45%",
    },
    center:{
        margin:'auto',
    },
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px",
    },
  
  }));

export default function Blog() {
    const classes=useStyles();
    // const cardclass = className("root","griditem");
    return (
        <div>
            <div className={classes.heading}>
                <Typography variant="h2" align="center"> Recent Blogs</Typography>
                <Button size='large' className={classes.button} link="http://medium.com/"> View on medium ></Button>
            </div>
            <br></br>
            <br></br>
            <Container>
            <Grid spacing={4} container className={classes.gridContainer} justify="center">
                <Grid items xs={12} sm={6} >
                    <Card className={classes.root} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image={Blogimage}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h3" component="h2">
                                Blog title
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p">
                                First Blog of DSc Adgitm Content of blog  Content of blog Content of blog Content of blog Content of blog Content of blog .....
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" color="primary">
                            Share
                            </Button>
                            <Button size="large" color="primary">
                            Read More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid items xs={12} sm={6}>
                <Card className={classes.root} variant="outlined">
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image={Blogimage}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h3" component="h2" link>
                                Blog title
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p">
                                Second Blog of DSC Adgitm. Content of blog  Content of blog Content of blog Content of blog Content of blog Content of blog
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" color="primary">
                            Share
                            </Button>
                            <Button size="large" color="primary">
                             Read More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid items xs={12} sm={6}>
                    
                </Grid>
                <Grid items xs={12} sm={6}>
                    
                </Grid>
            </Grid>
            </Container>
        </div>
    );
}

