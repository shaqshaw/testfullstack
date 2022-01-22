import React, { useState, useContext } from 'react';
import BasePageContext from '../../../BasePage/BasePageContext.js'
import MenuIcon from './components/MenuIcon/index.js';
import MenuItem from './components/MenuItem/index.js';
import Menu from './components/Menu/index.js';
import useStyles from './useStyles.js';

const MenuDropdown = () => {

    const isAuthenticated  = useContext(BasePageContext);  

    const classes = useStyles();

    const[modalOpen, changeState] = useState(false);
    const toggleModal = () => changeState(!modalOpen);

    if(!modalOpen) return <MenuIcon openMenu={toggleModal}/>

    return (
        <div>
            <div className={classes.overlay} onClick={toggleModal}/>
            <Menu closeMenu={toggleModal}>
                <MenuItem href='/auth'>My Account</MenuItem>
                <MenuItem href='/trade'>Dashboard</MenuItem>
                <MenuItem href='/trade'>My Trading Bots</MenuItem>
                {/* <MenuItem href='/shop'>Shop</MenuItem> */}
                <MenuItem href='/about'>About</MenuItem>
                {isAuthenticated && <MenuItem href='/api/logout'>Log Out</MenuItem>}
            </Menu>
        </div>
    );

}

export default MenuDropdown;