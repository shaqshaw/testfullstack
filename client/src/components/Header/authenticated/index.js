import React from 'react';
import useStyles from './useStyles';
import { DesktopScreen } from '../../MediaComponent';

const AuthHeader = () => {

    const classes = useStyles();
    return(
        <DesktopScreen>
            <div className={classes.container}>
                <p className={classes.menu}>  </p>
                <p className={classes.menu}>  </p>
                <p className={classes.menu}>  </p>
            </div>
        </DesktopScreen>
    );
}

export default AuthHeader;