import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './useStyles.js';

const PageContent = ({children}) => {

    const theme = useTheme();
    const classes = useStyles(theme);

    return(
        <div className={classes.pageContent}>
            {children}
        </div>
    );
    
}

export default PageContent;

