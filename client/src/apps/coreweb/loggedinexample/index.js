import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../../../components/BasePage/index.js';

// Logged In Page Example

const LoggedInPage =()=>{
    const userData = useSelector(state => state);
    return(
        <BasePage authRequired={true}>
            {/* <img className="responsive-img " src={photo} width = "1100" height = "1100" alt="logo"/> */}
            <p>Trading Dashboard</p>
            <Link to='/trade/watchlist'><p>Watchlist</p></Link>
            <Link to='/trade/chart'><p>Chart</p></Link>
            <Link to='/trade/notification'><p>Notifications</p></Link>
        </BasePage>
    );
}

export default LoggedInPage;