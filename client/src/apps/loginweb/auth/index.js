import React, { useContext } from 'react';
import BasePage from '../../../../components/BasePage/index.js';
import BasePageContext from '../../../../components/BasePage/BasePageContext.js'

export const Auth =()=>{
    const isAuthenticated = useContext(BasePageContext);

    if (isAuthenticated===null) return;
    if (isAuthenticated===false) return <p>not logged in</p>;

    return(
        <BasePage authRequired={false}>
            <p>If Authenticated, render User Account Page</p>
            <p>If not authenticated, render Log In and Sign Up</p>
        </BasePage>
    )
};

export default Auth;