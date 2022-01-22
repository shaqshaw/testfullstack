import React from 'react';
import transparentClose from './close.png';
import useStyles from './useStyles.js';

const CloseIcon = ({closeMenu}) => {

    const classes = useStyles();
    return(
        <img 
            className={classes.close}
            src={transparentClose} 
            width = {30} 
            height = {30}
            alt="close"
            onClick={closeMenu}
        />     
    );
}

export default CloseIcon;