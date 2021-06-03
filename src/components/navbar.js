import { AppBar, Button, Grid, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import learn from './navbar_images/learn.svg';
import discuss from './navbar_images/discuss.svg';
import crown from './navbar_images/crown.svg';
import lingot from './navbar_images/lingot.svg';
import more from './navbar_images/more.svg';
import shop from './navbar_images/shop.svg';
import streak from './navbar_images/streak.svg';
import learn2 from './navbar_images/learn2.svg'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    item:{
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    }
}));

const Navbar = () => {
    const classes = useStyles()
    const [anchorE1,setAnchorEl] = useState(null)
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const history = useHistory()
    const path = history.location.pathname
    return ( 
        <React.Fragment>
            <AppBar color="transparent" position="static" elevation={1}>
                <Toolbar style={{padding:"0px 130px"}}>
                    <Grid container>
                        {/* <Grid item xs={1} /> */}
                        {(path==='/learn')?(
                            <Grid item xs={1}>
                                <Link to="#" style={{textDecoration:"none"}}>
                                    <Grid container>
                                        <Grid item sm={6} xs={12}>
                                            <img height={36} width={36} src={learn} alt="Learn" />
                                        </Grid>
                                        <Grid className={classes.item} item  sm={6}>
                                            <Typography variant="h6" style={{color:"#1cb0f6"}}>Learn</Typography>
                                        </Grid>
                                    </Grid>
                                </Link>
                            </Grid>
                        ):(
                            <Grid item xs={1}>
                                <Link to="/learn" style={{textDecoration:"none"}}>
                                    <Grid container>
                                        <Grid item xs={12} sm={6}>
                                            <img height={36} width={36} src={learn2} alt="Learn" />
                                        </Grid>
                                        <Grid className={classes.item} item sm={6}>
                                            <Typography variant="h6" style={{color:"#AFAFAF"}}>Learn</Typography>
                                        </Grid>
                                    </Grid>
                                </Link>
                            </Grid>
                        )}
                        <Grid item xs={1} />
                        <Grid item xs={1}>
                            <Link to="/" style={{textDecoration:"none"}}>
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <img height={36} width={36} src={discuss} alt="Discuss" />
                                    </Grid>
                                    <Grid className={classes.item} item sm={6}>
                                        <Typography variant="h6" style={{color:"#AFAFAF"}}>Discuss</Typography>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={1}>
                            <Link to="/" style={{textDecoration:"none"}}>
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <img height={36} width={36} src={shop} alt="Shop" />
                                    </Grid>
                                    <Grid className={classes.item} item  sm={6}>
                                        <Typography variant="h6" style={{color:"#AFAFAF"}}>Shop</Typography>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={1}>
                            <Link to="/" style={{textDecoration:"none"}}>
                                <Grid container>
                                    <Grid item sm={6} xs={12}>
                                        <img height={36} width={36} src={more} alt="More" />
                                    </Grid>
                                    <Grid className={classes.item} item sm={6} >
                                        <Typography variant="h6" style={{color:"#AFAFAF"}}>More</Typography>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Grid>
                        <Grid item xs={2} />
                        <Grid item xs={3}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Button disabled>
                                        <img src={crown} alt="Crown" />
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button disabled>
                                        <img src={streak} alt="Streak" />
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button disabled>
                                        <img src={lingot} alt="Lingot" />
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <div>
                                        <Button aria-controls="simple-menu" aria-haspopup="true" to="#" style={{textDecoration:"none"}}>
                                            <AccountCircleIcon  onMouseEnter={(e)=>{handleClick(e)}}
                                            style={{fontSize:30, color:"#1cb0f6"}}/>
                                        </Button>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorE1}
                                            open={Boolean(anchorE1)}
                                            onClose={handleClose}
                                        >
                                            <Link to="/learn" style={{textDecoration:"none"}}><MenuItem onClick={handleClose}>Learn</MenuItem></Link>
                                            <Link to="/coach" style={{textDecoration:"none"}}><MenuItem onClick={handleClose}>Coach</MenuItem></Link>
                                            <Link to="/account" style={{textDecoration:"none"}}><MenuItem onClick={handleClose}>Account</MenuItem></Link>
                                        </Menu>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
     );
}
 
export default Navbar;