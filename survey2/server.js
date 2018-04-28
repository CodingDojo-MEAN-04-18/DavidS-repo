//load the express module
//load the path module
//load the body-parser
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
// invoke const express and store the resulting application in const app
const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./routes/index.js')(app);

app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(6700, function() {
 console.log("listening on port 6700");


})
var route = require('./routes/index.js')(app, server);