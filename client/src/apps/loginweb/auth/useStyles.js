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

            container: () => {

                return {
                    'width': '450px',
                    'margin': '30px auto'
                }

            },

            loginsignup: () => {

                return {
                    'width': '50%',
                    'background': '#fff',
                    'float': 'left',
                    'height': '60px',
                    'line-height': '60px',
                    'text-align': 'center',
                    'cursor': 'pointer',
                    'text-transform': 'uppercase'
                }

            },

            loginsignup: () => {

                return {
                    'background': '#fff',
                    'padding': '40px',
                    'clear': 'both',
                    'width': '100%',
                    'box-sizing': 'border-box',
                    'height': '400px',
                }

            },

            input: () => {

                return {
                    'width': '100%',
                    'padding': '20px',
                    'box-sizing': 'border-box',
                    'margin-bottom': '25px',
                    'border': '2px solid #e9eaea',
                    'color': '#3e3e40',
                    'font-size': '14px',
                    'outline': 'none',
                    'transform': 'all 0.5s ease',
                }

            },

            inputfocus: () => {

                return {
                    'border': '2px solid #34b3a0'
                }

            },

            button: () => {

                return {
                    'width': '100%',
                    'background': '#34b3a0',
                    'height': '60px',
                    'text-align': 'center',
                    'line-height': '60px',
                    'text-transform': 'uppercase',
                    'color': '#fff',
                    'font-weight': 'bold',
                    'letter-spacing': '1px',
                    'cursor': 'pointer',
                    'margin-bottom': '30px',
                }

            },
        }
})


export default useStyles;