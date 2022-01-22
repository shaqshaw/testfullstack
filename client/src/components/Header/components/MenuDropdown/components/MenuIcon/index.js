import React from 'react';
import { useTheme } from 'react-jss';
import whiteMenu from './whiteMenuIcon.png';
import blackMenu from './blackMenuIcon.png'
import useStyles from './useStyles.js';

const MenuIcon = ({openMenu}) => {

    const theme = useTheme();
    const classes = useStyles();
    return(
        <img className={classes.menuIcon}
            src={theme.name === 'primary' ? whiteMenu: blackMenu} 
            width = {23} 
            height = {20}
            alt="menu"
            onClick={openMenu}
        />
    );
}

export default MenuIcon;