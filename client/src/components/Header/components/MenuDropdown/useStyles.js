import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {

    return {

        overlay: () => ({
            opacity:'0.8',
            'background-color': '#000000',
            // 'opacity': '0.30',
            position:'fixed',
            width:'100%',
            height:'100%',
            top:'0px',
            left:'0px',
            'z-index':'1000'
        })
    }
});

export default useStyles;