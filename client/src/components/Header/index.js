import React, { useContext } from 'react';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';
import useStyles from './useStyles.js';
import BasePageContext from '../BasePage/BasePageContext.js';
import AuthHeader from './authenticated';
import AnonHeader from './anonymous';
import Logo from './components/Logo/index.js';
import MenuDropdown from './components/MenuDropdown/index.js';

const Header = ({sticky}) =>{

    const isAuthenticated  = useContext(BasePageContext);  

    const theme = useTheme();
    const classes = useStyles(theme);

    const renderNavBar = (isAuthenticated) => {
        switch(isAuthenticated){
            case null: 
                return;
            case false:
                return <AnonHeader/>
            default:
                return <AuthHeader/>
        }
    };


    return(
        <div className={classes.header}>
            <Logo/>
            {renderNavBar(isAuthenticated)}
            <MenuDropdown/>
        </div>
    );
}

Header.propTypes = {
    sticky: PropTypes.bool,
};

Header.defaultProps = {
    sticky: false
}

export default Header;