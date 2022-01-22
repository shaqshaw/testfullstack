import React from 'react';
import { useTheme } from 'react-jss';
import{ Link } from 'react-router-dom';
import blackLogo from './blackLogo.png';
import whiteLogo from './whiteLogo.png';
import useStyles from './useStyles.js';

const Logo = () => {

    const theme = useTheme();
    const classes = useStyles();
    return(
        <Link to="/">
            <img style={{'paddingLeft': '15px'}}
                className={classes.logo}
                src={theme.name === 'primary'? whiteLogo: blackLogo} 
                width = {160} 
                height = {80}
                alt="logo"
            />
        </Link>
    );
}

export default Logo;