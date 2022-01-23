const express = require ('express');
const mongoose = require ('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js');
const bodyParser = require('body-parser');
require('./models/users.js');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000,//how long the cookie will last
        keys: [keys.cookieKey] // there is a key used to encrypt cookie
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes.js')(app);
//require('./routes/currencyRoutes.js')(app);

if(process.env.NODE_ENV === 'production'){
    //ensure express serve up production assets if it doesnt knows the route eg '/dashboard'
    app.use(express.static('client/build'));

    //ensure express serve up the index.html file if it doesnt know the route and react doesn't either
    const path = require('path');
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 7070;
app.listen(PORT);