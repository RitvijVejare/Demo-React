import { Button, Card, CardContent, CardHeader, Divider, FormControlLabel, Grid, makeStyles, Switch, TextField, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import Navbar from './navbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
    gridItems:{
        margin:"25px 0px"
    }
}))

const CustomSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#1cb0f6',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#1cb0f6',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

const Account = () => {
    const classes = useStyles()
    return ( 
        <React.Fragment>
            <React.Fragment>
            <Navbar />
            <Grid container style={{marginTop:"50px"}}>
                <Grid item xs={1} />
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant="h5" style={{fontWeight:"bold"}}>Account Settings</Typography>
                        </Grid>
                        <Grid item xs={4} />
                        <Grid item xs={4} display="flex" justify="flex-end" style={{display:"flex"}}>
                            <Button variant="contained" style={{borderRadius:"10px"}}>Save Changes</Button>
                        </Grid>
                    </Grid>
                    <Grid style={{marginTop:"20px"}} container>
                        <Grid className={classes.gridItems} item xs={12}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography variant="h6">Username</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField variant="filled" style={{borderRadius:"20px",width:"476px",height:"48px"}} value="" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.gridItems} item xs={12}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography variant="h6">Email</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField variant="filled" style={{borderRadius:"20px",width:"476px",height:"48px"}} value="" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.gridItems} item xs={12}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography variant="h6">Sound Effect</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <FormControlLabel
                                        control={<CustomSwitch checked={true} name="checkedB" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.gridItems} item xs={12}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography variant="h6">Motivational Messages</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <FormControlLabel
                                        control={<CustomSwitch checked={true} name="checkedB" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.gridItems} item xs={12}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography variant="h6">Speaking Exercises</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <FormControlLabel
                                        control={<CustomSwitch checked={true} name="checkedB" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.gridItems} item xs={12}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography variant="h6">Listening Exercises</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <FormControlLabel
                                        control={<CustomSwitch checked={true} name="checkedB" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.gridItems} item xs={12}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography variant="h6">Profile Picture</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <TextField
                                        className={classes.TextField}
                                        variant="standard"
                                        component={"span"}
                                        id="addifile"
                                        name="addifile"
                                        type="file"
                                        required
                                    />
                                </Grid>
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
 
export default Account;

                            
                            
                            
                            
                            
                            
                            