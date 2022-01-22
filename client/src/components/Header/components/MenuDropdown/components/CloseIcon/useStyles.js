import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {

    return {

        close: () => ({
            position: 'relative',
            top:'8px',
            right:'-260px',
            cursor: 'pointer'
        }),

    
    }
});

export default useStyles;