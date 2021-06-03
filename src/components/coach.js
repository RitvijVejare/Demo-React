import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Navbar from './navbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import duo from './navbar_images/duo.png'
import Footer from './footer';

const useStyles=makeStyles(theme=>({
    button:{
        height:"50px",
        fontWeight:"bold",
        borderRadius:"20px",
        border:"0px",
        width:"328px",
        justifyContent:"flex-start",
        '&:hover': {
            backgroundColor: '#AFAFAF',
        }
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}))

const list = {
    backgroundColor:"#1cb0f6"
}
const text = {
    fontWeight:"bold",
}

const Coach = () => {
    const classes = useStyles()
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return ( 
        <React.Fragment>
            <React.Fragment>
            <Navbar />
            <Grid container style={{marginTop:"50px"}}>
                <Grid item xs={2} />
                <Grid item xs={5}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant="h5" style={{fontWeight:"bold"}}>Account Settings</Typography>
                        </Grid>
                        <Grid item xs={4} />
                        <Grid item xs={4} display="flex" justify="flex-end" style={{display:"flex", justifyItems:"flex-end"}}>
                            <Button variant="contained" style={{borderRadius:"10px"}}>Save Changes</Button>
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <Typography style={{fontSize:"16px", fontWeight:"bold"}} color="textSecondary">Coach here! Selecting a daily goal will help you stay motivated while learning a language. You can change your goal at any time.</Typography>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <img src={duo} alt="duo" />
                            </Grid>
                            <Grid item xs={6}>
                                <Box border={1} borderRadius="10px">
                                    <List  component="nav">
                                        <ListItem
                                        ContainerProps={{style:list}}
                                        style={{fontWeight:"bold"}}
                                        button
                                        selected={selectedIndex === 0}
                                        onClick={(event) => handleListItemClick(event, 0)}
                                        >
                                            <ListItemText primaryTypographyProps={{style:text}}  primary="Basic" />
                                        </ListItem>
                                        <Divider />
                                        <ListItem
                                        button
                                        selected={selectedIndex === 1}
                                        onClick={(event) => handleListItemClick(event, 1)}
                                        >
                                            <ListItemText primaryTypographyProps={{style:text}} primary="Casual" />
                                        </ListItem>
                                        <Divider />
                                        <ListItem
                                        button
                                        selected={selectedIndex === 2}
                                        onClick={(event) => handleListItemClick(event, 2)}
                                        >
                                            <ListItemText primaryTypographyProps={{style:text}} primary="Regular" />
                                        </ListItem>
                                        <Divider />
                                        <ListItem
                                        button
                                        selected={selectedIndex === 3}
                                        onClick={(event) => handleListItemClick(event, 3)}
                                        >
                                            <ListItemText primaryTypographyProps={{style:text}} primary="Serious" />
                                        </ListItem>
                                        <Divider />
                                        <ListItem
                                        button
                                        selected={selectedIndex === 4}
                                        onClick={(event) => handleListItemClick(event, 4)}
                                        >
                                            <ListItemText primaryTypographyProps={{style:text}} primary="Intense" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider style={{marginTop:"50px"}} />
                    <Footer />
                </Grid>
                <Grid item xs={4} display="flex" justify="center" style={{display:"flex", justifyItems:"center"}}>
                    <Card variant="outlined" style={{width:"376px", height:"585px", borderRadius:"20px", borderColor:"#AFAFAF"}}>
                        <CardHeader
                            avatar={<AccountCircleIcon fontSize="large" style={{color:"#1cb0f6"}} />}
                            title="HerculesMunda"
                            subheader="View your profile"
                            titleTypographyProps={{variant:"h5"}}
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.button}>Account</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.button}>Learning Language</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.button}>Profile</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.button}>Password</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.button}>Duolingo plus</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.button}>Coach</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.button}>Notifications</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.button}>Progress Sharing</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.button}>Privacy</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </React.Fragment>
        </React.Fragment>
     );
}
 
export default Coach;

                            
                            
                            
                            
                            
                            
                            