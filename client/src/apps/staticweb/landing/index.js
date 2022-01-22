import React from 'react';
import BasePage from '../../../../components/BasePage/index.js';
//import StockPhoto from '../../../../assets/stockphoto.jpeg';
import { tertiaryTheme } from '../../../../styling/index.js';
import CTA from './components/CTA/index';


const Landing =()=>{

    return(
        <BasePage authRequired={false} theme={tertiaryTheme}>

            <CTA/>
            
            {/* <img 
                style={{
                    'maxWidth': '100%',
                    'height': 'auto',
                    // 'width': 'auto'
                }}
                src={StockPhoto}
                alt="logo"
            /> */}
        </BasePage>
    )
};

export default Landing;