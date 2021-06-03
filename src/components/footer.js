import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles=makeStyles(theme=>({
    item:{
        padding:"10px 35px",
        display:"flex",
        justifyContent:'center'
    },
    typo:{
        fontSize:"12px",
        fontWeight:"bold"
    }
}))

const Footer = () => {
    const classes=useStyles()
    return ( 
        <React.Fragment>
            <Grid container style={{borderTop:"2px",marginTop:"40px"}}>
                <Grid className={classes.item} item xs={1}>
                    <Typography className={classes.typo} color="textSecondary" >ABOUT</Typography>
                </Grid>
                <Grid className={classes.item} item xs={1}>
                    <Typography className={classes.typo} color="textSecondary" >BLOG</Typography>
                </Grid>
                <Grid className={classes.item} item xs={1}>
                    <Typography className={classes.typo} color="textSecondary" >SCHOOLS</Typography>
                </Grid>
                <Grid className={classes.item} item xs={1}>
                    <Typography className={classes.typo} color="textSecondary" >APPS</Typography>
                </Grid>
                <Grid className={classes.item} item xs={1}>
                    <Typography className={classes.typo} color="textSecondary" >HELP</Typography>
                </Grid>
                <Grid className={classes.item} item xs={1}>
                    <Typography className={classes.typo} color="textSecondary" >GUIDELINE</Typography>
                </Grid>
                <Grid className={classes.item} item xs={1}>
                    <Typography className={classes.typo} color="textSecondary" >CAREERS</Typography>
                </Grid>
                <Grid className={classes.item} item xs={1}>
                    <Typography className={classes.typo} color="textSecondary" >TERMS</Typography>
                </Grid>
                <Grid className={classes.item} item xs={1}>
                    <Typography className={classes.typo} color="textSecondary" >PRIVACY</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
     );
}
 
export default Footer;