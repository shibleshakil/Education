const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const session = require('express-session');

const port = process.env.PORT || 5000;

// configure middleware
app.set('port', port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload
app.use(session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge : 1000 * 60 * 60 * 24, httpOnly: true }
}));


//app.use(require('./routes/pages'));
//app.use(require('./routes/admin'));
const router = require('./router')
app.use('/', router)

app.listen(port, function () {
    console.log(`Server running on port: ${port}`);
});