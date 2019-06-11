let express = require('express');
let router = express.Router();
let db = require('../db/database.js');

//display list of dishes onto page
router.get('/dishes', (req, res)=>{
    db.query('SELECT * FROM restaurants')
    .then((results) => {
        //results is going to be an array of objects
        res.render('dishes', {
            dishes: results //DISPLAYING RESULTS FROM THE DB.QUERY
        })
    }).catch((error) => {
        res.send('error')
    })
    // res.send('dishes');
})

router.get('/newdish', (req, res)=>{
    res.render('newDish');
})

module.exports = db;