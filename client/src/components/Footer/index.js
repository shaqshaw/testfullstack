import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './useStyles.js';

const Footer = () => {

    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <div className={classes.footer}>
            <p className={classes.text}>Augustus AI © 2021</p>
            <p className={classes.text}>Contact</p>
            <p className={classes.text}>Forums</p>
            <p className={classes.text}>Locations</p>
        </div>
    );
    
}

export default Footer;

