import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider} from 'react-jss'
import BasePageContext from './BasePageContext.js';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';
import Skeleton from './Skeleton.js'
import PageContent from '../PageContent/index.js'
import { primaryTheme } from '../../styling/index.js';

const BasePage =({
    authRequired,
    headerSticky,
    theme,
    showHeader,
    showFooter,
    children
}) =>{
    
    const isAuthenticated = useSelector(state => state.auth);
    if (isAuthenticated === null) return <Skeleton/>;
    if (authRequired && !isAuthenticated) return <AuthError/>;
    
    //the sticky property is added to the theme here because it is used to style the header, 
    // but it is user dependent so cannot be passed in statically

    theme.header.sticky = headerSticky;

    return(
        <BasePageContext.Provider value ={isAuthenticated}>
            
            <ThemeProvider theme={theme}>

                <PageWrapper >

                    { showHeader && <Header sticky={headerSticky}/> }

                    <PageContent>
                        {children}
                    </PageContent>

                    { showFooter && <Footer /> }

                </PageWrapper>

            </ThemeProvider>
        
        </BasePageContext.Provider>
    );
};

const PageWrapper = ({children}) =>{
    return(
        <div style= {{'position': 'relative', 
        'minHeight': '100vh',
        'display':'grid'}}>
            {children}
        </div>
    )
}


const AuthError =() =>{
    return(
        <a href="/auth/google">
            <p>You need to be authenticated to view this page, click here to Log In</p>
        </a>
    );
};

BasePage.propTypes = {
    headerSticky: PropTypes.bool,
    authRequired: PropTypes.bool.isRequired,
    theme: PropTypes.object,
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool
};

BasePage.defaultProps = {
    headerSticky: false,
    authRequired: true,
    theme: primaryTheme,
    showHeader: true,
    showFooter: true
};

export default BasePage;