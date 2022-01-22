import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {

    return {

        menu: () => ({
            width: '312px',
            'background-color': 'white',
            display: 'flex',
            'flex-direction': 'column',
            right: '0px',
            top: '0px',
            bottom: '0px',
            position: 'fixed',
            'z-index': '1001',
            'padding-top': '15px',
        })
    };
});

export default useStyles;

