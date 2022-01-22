import global from './globalThemes.js';

const headerHeight ='50px';
const footerHeight ='50px';

const tertiary = {
    ...global,
    name: 'tertiary',
    header: {
        height: headerHeight,
        color: '00FFFFFF',
    },
    footer: {
        color: '00FFFFFF',
        height: footerHeight,
    },
    menudropdown: {
        'background-color': '',
        'text-color': ''
    },
    pageContent:{

        'top-padding':'0px',
        'bottom-padding': '0px',
        
        'background-color': '#ffffff'
    }


}

export default tertiary;