// THIS IS AN EXAMPLE OF A ROUTE GROUP

// const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');
// const requireMaxCharts = require('../middlewares/requireMaxCharts');
// const requireCurrencySupport = require('../middlewares/requireCurrencySupport');
// const requireNewSubscriber = require('../middlewares/requireNewSubscriber');
// const requireOldSubscriber = require('../middlewares/requireOldSubscriber');
// const Mailer = require('../services/Mailer');
// const addCurrencyTemplate = require('../services/emailTemplates/addCurrencyTemplate');
// const removeCurrencyTemplate = require('../services/emailTemplates/removeCurrencyTemplate');


// const Currency = mongoose.model('currency');

// module.exports = app => {

//     app.post('/api/addcurrency', requireLogin, requireMaxCharts, requireCurrencySupport, requireNewSubscriber, async (req, res) => {
//         const { pair } = req.body;
//         recipient = req.user.email;

//         try{
//             const existingCurrency = await Currency.findOne({pair: pair})

//             //create new suscriber
//             const newsubscriber = {
//                 userID: req.user.id,
//                 email: req.user.email,
//                 dateAdded: Date.now()
//             };

//             if(existingCurrency){
//                 // add subscriber to currency
//                 await Currency.findOneAndUpdate({pair: pair}, {$push: {subscribers: newsubscriber}} );
             
                
//             }else{
//                 //create the new currency in mongo with subscriber
//                 await new Currency({ pair: pair, subscribers: newsubscriber }).save();
//             }

//             //await Mailer(recipient, addCurrencyTemplate(pair)); //send email about newly added currency

//             req.user.pairs.push(pair); // add pair to user's list
//             req.user.charts++; // add one more to list of charts user has
//             const user = await req.user.save(); //save user
//             res.send(user);

//         } catch(err){
//             res.status(422).send(err);
//         }
        
//     });

//     app.post('/api/removecurrency', requireLogin, requireOldSubscriber, async (req, res) => {
//         const { pair } = req.body;
//         recipient = req.user.email;

//         try{
//             // remove subscriber from currencylist 
//             await Currency.findOneAndUpdate({pair: pair}, {$pull: {subscribers: {userID: req.user.id}}} );


//             //await Mailer(recipient, removeCurrencyTemplate(pair)); //send email about newly removed currency

//             req.user.pairs.splice( req.user.pairs.indexOf(pair), 1 ); //remove pair from user list
//             req.user.charts--; // remove one more to list of charts user has
//             const user = await req.user.save(); //save user
//             res.send(user);

//         } catch(err){
//             res.status(422).send(err);
//         }

//     });
// };