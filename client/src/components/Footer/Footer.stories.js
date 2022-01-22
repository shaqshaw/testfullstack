import React from 'react';
import Footer from './index.js';
import BasePageContext from '../BasePage/BasePageContext.js';

export default {
    title: 'Components/Footer',
    component: Footer
};

export const Default = () => {
    const isAuthenticated=true;

    return (
        <BasePageContext.Provider value={isAuthenticated}>
            <Footer/>
        </BasePageContext.Provider>
    );
}
