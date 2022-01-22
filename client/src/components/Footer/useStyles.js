import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {

    return {

        footer: (theme) => {

            return {
                height: '50px',
                'width': '101.8%',
                'position': 'absolute',
                bottom: '-9px',
                'right':'-8px',
                'background-color': theme.footer.color,
                'display': 'flex',
                'justify-content': 'center',
                'z-index':1000
            }
        },

        text: () => ({
            'color': 'grey',
            'font-size':'13px',
            'paddingRight': '7px',
            'paddingLeft': '7px',
        }),

    
    }
});

export default useStyles;