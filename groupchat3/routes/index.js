module.exports = function Route(app, server){
const all_messages = [] //list to push all messages into


	// this gets the socket.io module
//	var io = require('socket.io').listen(server) 
	// root route to render the index.ejs view
app.get ('/', function(request,response){
           response.render('index')
 })


//	app.get('/', function(req, res) {
//		res.render("index");
//	})


const io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('Client/socket is connected!');
    console.log('Client/socket id is: ' + socket.id)

    socket.on("new_message", function(data){
        io.emit("post1", {name: data.name, message: data.message})
        all_messages.push({name: data.name, message: data.message})
        console.log(data.name, data.message)
    })
//listen for user logging in, take data(name) and EMIT all previous messages back to user.
    socket.on("load_page", function(data){
        socket.emit("messages1", {name: data.name, messages: all_messages})
    })
})


 // app.get("/", function(request, response){
 //   response.render("index")
 // }

}

  