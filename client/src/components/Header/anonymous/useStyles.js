import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {

    return {

        container: () => ({
            'display':'flex',
            'justify-content': 'space-between',
            // 'display':'inline-block',
        }),

        menu: () => ({
            'display':'inline-block'
        }),

        /********** Media Queries ******** */
        // [`@media (max-width: 1024px)`]:{
        //     container: () => {
        //         return ({
        //             display: 'none',
        //         });
        //     }
        // }
    }
});

export default useStyles;