import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'react-jss';
import useStyles from './useStyles';

const CTA =()=>{


    const theme = useTheme();
    const classes = useStyles(theme);

    return(


        <div className={classes.ctaWrapper}>

            {/* <p className={classes.mainCTA} >Build Finance Robots with Augustus</p>

            <p className={classes.description}>Augustus is a platform that helps investors build robots that can manage finances for them. Sign up for free. </p> */}

            <div style={{'textAlign':'center'}}>
                <Link to={"/trade"} style={{'textDecoration': 'none'}}>
                    <button className={classes.button}> Explore </button>
                </Link>
            </div>
            

        </div>

    )
}

export default CTA;
