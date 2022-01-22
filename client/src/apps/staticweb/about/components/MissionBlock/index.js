import React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './useStyles';

export const MissionBlock = () => {

    const theme = useTheme();
    const classes=useStyles(theme);

    return(
        <div className={classes.block}>
            <h1 className={classes.heading}>About Augustus</h1>
            <p className={classes.content}>Augustus is a brand created to assist the human race with its transition into the virtual age - The Novacene. </p>
            <p className={classes.content}>In recent months, human beings found it necessary to adapt their way of interacting, more specifically, with institutions, entities, other humans and even themselves, due to the COVID-19 outbreak. It is no doubt that technology and AI should be thanked for keeping our advanced age going during this time, when we were physically incapable of doing so. </p>
            <p className={classes.content}>As technology is the offspring of our very population, is it hard to see why questions won't be asked by the unexposed mass such as: 'How does this work? How far can this go to help us? How can I automate my own processes? ' - which if I might add, are unbounded questions and answers goes as far as the creative mind allows it.</p>
            <p className={classes.content}>Industries and sectors ( ie. Health Care, Retail, Travel, Finance, etc. ) are now individually seeing a rapid evolution, with the latter already seeing its technological counterpart supperceding it in the area of exchange - Bitcoin - raising questions about the very existence of government backed currrencies.</p>
            <p className={classes.content}>But how does augustus come into play? Well before technology is utterly shoved down the throats of the mass, and it is rejected almost like a biological gag reflex , we belive it necessary that all participate in its growth and development - a somewhat interactive approach to lessen cultural shock. Technology is general but also specific. </p>
            <p className={classes.content}>Think of a process, and let us help you automate it. For now, welcome our automated process of Foreign Exchange trading, an industry soon depracated but surely, an immutable start for our proof of concept.</p>
        </div>
    )
}

export default MissionBlock;