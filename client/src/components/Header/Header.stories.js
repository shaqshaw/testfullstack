import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index.js';
import BasePageContext from '../BasePage/BasePageContext.js';

export default {
    title: 'Components/Header',
    component: Header,
    args: {
        isAuthenticated:true,
    },
    decorators: [ getStory => <MemoryRouter>{getStory()}</MemoryRouter>]
};

const Template = args =>  
    <BasePageContext.Provider value={args.isAuthenticated}>
        <Header {...args}/>
    </BasePageContext.Provider>;

export const Default = Template.bind({});
Default.args = {
    isAuthenticated:false,
};

// export const Anonymous = Template.bind({});
// Anonymous.args = {isAuthenticated:false};


// props and args are automatically taken as toggles
// therefore an instance of the component should only be defined if it is a notable state
// ie. a sequence of prop toggles that on onlooker should make note of

// Args defined at the component level(default export) are automatically assigned to all components, 
// unless overridden by a state args
// this therefore is only necessary if the default props is not wanted