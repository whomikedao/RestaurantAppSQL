let express = require('express');
let router = express.Router();
let db = require('../db/database.js');
let bodyParser = require('body-parser');

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

router.use(bodyParser.urlencoded({extended: false}));

router.post('/dishes', (req, res)=>{
    //INSERTS RECORD INTO DATABASE
    let title = req.body.title;
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let imageURL = req.body.imageURL;

    //THIS SANITIZES OUR INPUTS
    db.none('INSERT INTO dishes(name, category, foodDescription, price, course, imageURL) values ($1, $2, $3, $4, $5, %6)',
    [title, 1, description, price, '', imageURL])
    .then((data) => { //HAVE TO DO A THEN BECAUSE THE DB.NONE MIGHT BE DONE BEFORE THE DB.QUERY
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

    
    
})

router.get('/newdish', (req, res)=>{
    res.render('newDish');
})

module.exports = router;