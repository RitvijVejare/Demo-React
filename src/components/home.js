import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Home = () => {
    return ( 
        <React.Fragment>
            <Navbar />
            <Grid container style={{marginTop:"20px"}}>
				<Grid item xs={4} display="flex" justify="center" style={{display:"flex", justifyItems:"center"}}>
					<Link to="/learn" style={{textDecoration:"none"}}><Button variant = "contained">/learn</Button></Link>
				</Grid>
				<Grid item xs={4} display="flex" justify="center" style={{display:"flex", justifyItems:"center"}}>
					<Link to="/coach" style={{textDecoration:"none"}}><Button variant = "contained">/coach</Button></Link>
				</Grid>
				<Grid item xs={4} display="flex" justify="center" style={{display:"flex", justifyItems:"center"}}>
                    <Link to="/account" style={{textDecoration:"none"}}><Button variant = "contained">/account</Button></Link>
				</Grid>
			</Grid>
        </React.Fragment>
     );
}
 
export default Home;