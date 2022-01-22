import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';


const breakPoints = {
    md: 768,
    lg: 1200
};

const MOBILE_SCREEN = `(max-width: ${breakPoints.md -1}px)`;
const TABLET_SCREEN = `(min-width: ${breakPoints.md}px)`;
const DESKTOP_SCREEN = `(min-width: ${breakPoints.lg }px)`;

export const MobileScreen = ({ children, defaultMatches }) => {
    return (
        <Media
            defaultMatches={defaultMatches}
            query={MOBILE_SCREEN}
            render={()=>children}
        />
    )
}

export const TabletScreen = ({ children, defaultMatches }) => {
    return (
        <Media
            defaultMatches={defaultMatches}
            query={TABLET_SCREEN}
            render={()=>children}
        />
    )
}

export const DesktopScreen = ({ children, defaultMatches }) => {
    return (
        <Media
            defaultMatches={defaultMatches}
            query={DESKTOP_SCREEN}
            render={()=>children}
        />
    )
}

MobileScreen.propTypes = {
    children: PropTypes.node.isRequired,
    defaultMatches: PropTypes.bool
};

MobileScreen.defaultProps={
    defaultMatches: false
}

TabletScreen.propTypes = {
    children: PropTypes.node.isRequired,
    defaultMatches: PropTypes.bool
};

TabletScreen.defaultProps={
    defaultMatches: false
}

DesktopScreen.propTypes = {
    children: PropTypes.node.isRequired,
    defaultMatches: PropTypes.bool
};

DesktopScreen.defaultProps={
    defaultMatches: false
}