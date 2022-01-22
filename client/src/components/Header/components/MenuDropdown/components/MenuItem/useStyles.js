import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {

    return {

        menuItem: () => ({
            'border-bottom': '1px solid #d0d1d2',

            'margin-left': '20px',
            'margin-right': '20px',

            'padding-top': '5px',
            'padding-bottom': '5px',
            
            'text-decoration': 'none',
        }),

        menuText: () => ({
            'padding-left': '7px',
            'color': 'black'
        })
    }
});

export default useStyles;