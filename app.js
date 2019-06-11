let express = require('express');
let app = express();
let port = 3000;


app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

//routes
app.use(require('./routes/dishes'));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})