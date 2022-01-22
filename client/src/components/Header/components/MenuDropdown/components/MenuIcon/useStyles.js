import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {

    return {

        menuIcon: () => ({
            position: 'relative',
            top: '14px',
            right: '15px',
            cursor: 'pointer',
            'padding-right': '15px',
            'text-color': 'black'
        }),

    
    }
});

export default useStyles;