//npm init
//npm install pg-promise express bluebird

let express = require('express');
let app = express();
const promise = require('bluebird');

//step 1 configurations
const initOptions = {
    promiseLib: promise
}

let config = {
    //NEED DATABASE SO CREATE ONE
    host: 'localhost',
    port: 5432, //DEFAULT POSTICO PORT 
    database: 'practicedb',
    user: 'postgres' //default username
};

//load and initialize pg-promise
let pgp = require('pg-promise')(initOptions)

//create the database instance
let db = pgp(config);

//QUERYING SOMETHING THORUGH JS USING db.query
//db.query is like a promise so you can chain
//before doing a db.query of your own database, put some info in a sql file

// db.query('SELECT * FROM restaurants')
// .then((results) => { //results from the db.query and it'll be an array of objects FROM restaurants
//     results.forEach((record) => {//each object that pass through is a record
//         console.log(`id: ${record.id}, name: ${record.name}, category: ${record.category}`);
//     })
// })
//QUERY METHODS
//one: expects one row or errors out

// db.one('SELECT * FROM restaurants WHERE id = 3')
// .then((result) => {
//     console.log(result.id, result.name, result.category);
// })

//DB.RESULT
// db.result("INSERT INTO restaurants VALUES (DEFAULT, 'pad kee mow', 1)")
// .then((result) => {
//     console.log(result);
// })

// let name = "Big Belly Burgers";
// let query = `INSERT INTO restaurants \
// VALUES (default, '${name}')"`;

// db.result(query, name)

//need to close your connection

let server = app.listen(3000, (params)=>{
    console.log('Listenign on port 3000');
})
server.on('close', () => {//then the application closes down then this funciton will close out of database connection
    pgp.end()
})