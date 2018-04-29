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
	io.sockets.on('connection', function (socket){
		//server listens to "posting_form" event
                let mycount = 0
	 	socket.on("posting_form", function (data){
	 		//generate a random number
                  mycount = (mycount + 1);

		  //will emit the data to the client 
			socket.emit('plus_one', {response: mycount}); 
		})
                socket.on("reset_me", function(){
                     mycount = -1
                     console.log(mycount);
                       socket.emit('reset_me', {response: mycount});
	})
      })
