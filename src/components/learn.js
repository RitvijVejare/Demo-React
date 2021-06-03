import { Card, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Navbar from './navbar';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import Footer from './footer';

const Learn = () => {
    return ( 
        <React.Fragment>
            <Navbar />
            <Grid container style={{marginTop:"50px"}}>
                <Grid item xs={3} />
                <Grid item  xs={6} style={{padding:"20px"}}>
                    <Card style={{width:"400px", height:"336px", borderRadius:"20px", borderColor:"#FFF"}}>
                        <CardContent style={{textAlign:"center"}}>
                            <Typography variant="h5" style={{fontWeight:"bold"}}>
                                Choose Your Path!
                            </Typography>
                            <br/>
                            <Typography color="textSecondary" style={{fontWeight:"bold"}}>
                                Beginners start at Basics 1.
                            </Typography>
                            <Typography color="textSecondary" style={{fontWeight:"bold"}}>
                                Advanced learners take a short test.
                            </Typography>
                            <br/>
                            <br/>
                            <Grid container>
                                <Grid item xs={2} />
                                <Grid item xs={4}>
                                    <EmojiEmotionsRoundedIcon style={{fontSize: 75, color:"greenyellow"}} />
                                    <br/>
                                    <Typography variant="h6" style={{fontWeight:"bold"}}>Basics 1</Typography>
                                </Grid>
                                <Grid item xs={1} style={{marginTop:"40px"}}>
                                    <Typography variant="h6" style={{fontWeight:"bold"}}>OR</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <EmojiEmotionsRoundedIcon style={{fontSize: 75, color:"greenyellow"}} />
                                    <br/>
                                    <Typography variant="h6" style={{fontWeight:"bold"}}>Placement Tests</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Divider style={{margin:"50px"}} />
                    <Footer />
                </Grid>
            </Grid>
        </React.Fragment>
     );
}
 
export default Learn;