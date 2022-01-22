import global from './globalThemes.js';

const headerHeight ='50px';
const footerHeight ='50px';

const primary = {
    ...global,
    name: 'primary',
    header: {
        height: headerHeight,
        color: '#212121',
    },
    footer: {
        color: '#212121'
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

export default primary;