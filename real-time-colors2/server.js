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

// require('./routes/index.js')(app);

app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(6700, function() {
 console.log("listening on port 6700");


})


	// this gets the socket.io module
	var io = require('socket.io').listen(server) 
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})
	//listen to connection even from the client side
//	io.sockets.on('connection', function (socket){

        io.on('connection', function (socket) {

            socket.on('changeBgColor', function (color) {
                console.log(color);
                socket.broadcast.emit('changeBgColorEveryWhere', color.color);
                socket.emit('changeBgColorEveryWhere', color.color);
            });
        });


