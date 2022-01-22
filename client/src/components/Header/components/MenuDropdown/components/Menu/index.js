import React from 'react';
import useStyles from './useStyles.js';
import CloseIcon from '../CloseIcon/index.js';

const Menu = ({children, closeMenu}) => {

    const classes = useStyles();

    return(
        <div className={classes.menu}>
            <CloseIcon closeMenu={closeMenu}/>
            {children}
        </div>
    );
}

export default Menu;