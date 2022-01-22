import global from './globalThemes.js';

const headerHeight ='50px';
const footerHeight ='50px';

const secondary = {
    ...global,
    name: 'secondary',
    header: {
        height: headerHeight,
        color: '#A9A9A9',
    },
    footer: {
        color: '#A9A9A9'
    },
    menudropdown: {
        'background-color': '',
        'text-color': ''
    },
    pageContent:{

        'top-padding':headerHeight,
        'bottom-padding': footerHeight,

        'background-color': '#ffffff'
    }


}

export default secondary;