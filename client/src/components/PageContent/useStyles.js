import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {

    return {

        pageContent: (theme) => {

            return {
                'padding-bottom': theme.pageContent['bottom-padding'],
                'padding-top': theme.pageContent['top-padding'],

                //cannot use absulte or footer will not move with page
                // as absolute does not alow expansion of parent by children
                'grid-column': '1',
                'grid-row': '1',

                top: '0',

                width: '100%',
                'background-color': theme.pageContent['background-color']
            }
        },

    }
});

export default useStyles;