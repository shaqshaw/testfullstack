import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(()=> {

        return {
            
            heading: (theme) => {

                return {
                    'font-size': theme.global['medium'],
                    'line-height': theme.global['xlarge'],
                    'font-family': theme.global['font-family'],
                    'text-align': 'center'
                }

            },

            content: (theme) => {
                return {
                    'font-size': theme.global['medium'],
                    'line-height': theme.global['xlarge'],
                    'font-family': theme.global['font-family'],
                }
            },

            block: () => {

                return {
                    'margin-right': '200px',
                    'margin-left': '200px',
                    'margin-top': '100px',
                    'margin-bottom': '100px',
                }
                
            }
        }
});

export default useStyles;

