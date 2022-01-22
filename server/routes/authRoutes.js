const passport = require('passport');
//says create a route handler that whenever this route is loaded do this
//also says, use passport to use whatever strategy that is named 'Google' by them
// also says get their profile and email
//from this some code is returned
module.exports= (app) =>{
    app.get('/auth/google', passport.authenticate('google', {
        scope:['profile', 'email']
    }));
    
    //handles whenever google sneds back a callback request
    //this ggogle code got from above is returned and called to google when the callback function is called
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'), //middleware that takes code out of url and fetches user profile and then pass to next middleware
        (req, res)=>{
            res.redirect('/');
        }
        );
    
    app.get('/api/logout', (req,res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
