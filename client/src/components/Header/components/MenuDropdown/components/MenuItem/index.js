import React from  'react';
import { Link } from 'react-router-dom';
import useStyles from './useStyles.js';

const MenuItem = ({href, children}) => {

    const classes = useStyles();

    return(
        <div className={classes.menuItem}>
            <Link to={href} style={{'textDecoration': 'none'}}>
                <p className={classes.menuText}>
                    {children}
                </p>
            </Link>
        </div>
    );
};

export default MenuItem;