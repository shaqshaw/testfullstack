import React from 'react';
import BasePage from '../../../components/BasePage/index.js';
import MissionBlock from './components/MissionBlock';

export const About =()=>{
    return(
        <BasePage authRequired={false} sticky={true}>
            <MissionBlock/>      
        </BasePage>
    )
};

export default About;