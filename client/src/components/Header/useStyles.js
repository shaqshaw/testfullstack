import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {


    return {

        header: (theme) => {
        
            return {
                height: theme.header.height,
                display: 'flex',
                'justify-content': 'space-between',
                'background-color': theme.header.color,

                'top': '-8px',
                'right':'-9px',

                //cannot use absulte or footer will not move with page
                // as absolute does not alow expansion of parent by children
                'grid-column': '1',
                'grid-row': '1',

                'position': theme.header.sticky ? 'sticky': 'absolute',
                'z-index': 10000,
                width: '101.8%'
            }
        }
    
    }
});

export default useStyles;