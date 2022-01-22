import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(()=> {

        return {
            
            ctaWrapper: () => {

                return {
                    'margin': '0', 
                    'position': 'absolute', 
                    'top': '50%', 
                    'left': '50%', 
                    '-ms-transform': 'translate(-50%, -50%)', 
                    'transform': 'translate(-50%, -50%)'
                }

            },

            mainCTA: (theme) => {

                return {
                    'font-size': theme.global['medium'],
                    'line-height': theme.global['xlarge'],
                    'font-family': theme.global['font-family'],
                    'font-style': theme.global['font-style'],
                }

            },

            description: (theme) => {
                return {
                    'font-size': theme.global['medium'],
                    'line-height': theme.global['xlarge'],
                    'font-family': theme.global['font-family'],
                    'font-style': theme.global['font-style'],
                }
            },

            button: () => {

                return {
                    //  'display':'inline-block',
                     'padding':'0.3em 1.2em',
                    //  'margin':'0 0.3em 0.3em 0',
                    //  'border-radius':'2em',
                    //  'box-sizing': 'border-box',
                     'text-decoration':'none',
                     'font-family':'Roboto,sans-serif',
                     'font-weight':'300',
                     'color':'#FFFFFF',
                     'background-color':'rgb(177 177 177)',
                
                     'text-align':'center',
                     'transition': 'all 0.2s',
                
                    '&:hover':{
                     'background-color':'#dad345'
                    },
                }
                
            },

            [`@media all and (max-width:30em)`]:{
                 button:() => {
                    return({
                          'display':'block',
                          'margin':'0.2em auto',
                    })
                 }
            }
        }
    });
    
export default useStyles;