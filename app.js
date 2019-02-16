const express=require("express");
const app=express();
const configRoutes=require("./routes");
const bodyParser = require("body-parser");
const static = express.static(__dirname + "/public");
const ejs = require('ejs');
const ws = require('ws'); 
const http = require('http');
const winston = require('winston'); 
// web socket logic const ws_server = require();

let logger = winston.createLogger({
	level: 'debug',
	transports: [
		new (winston.transports.Console)({ colorize: true }),
	]
}); 

app.use(static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(bodyParser.json());
configRoutes(app);

// let server=app.listen(3000,()=>{
// 	console.log("We've got a server!");
// 	console.log("Your routes will be running on http://localhost:3000");
// });

let server = http.createServer(app).listen(3000, function () { });

setupWebSocket();

function setupWebSocket() {
	console.log('------------------------------------------ Websocket Up ------------------------------------------');
	wss = new ws.Server({ server: server });								//start the websocket now
	wss.on('connection', function connection(ws) {
		ws.on('message', function incoming(message) {
			console.log(' ');
			console.log('-------------------------------- Incoming WS Msg --------------------------------');
			logger.debug('[ws] received ws msg:', message);
			var data = null;
			try {
				data = JSON.parse(message);
			}
			catch (e) {
				logger.debug('[ws] message error', message, e.stack);
			}
				
			if (data) {
				//ws_server.process_msg(ws, data);							//pass the websocket msg for processing
			}
		});

		ws.on('error', function (e) { logger.debug('[ws] error', e); });
		ws.on('close', function () { logger.debug('[ws] closed'); });
		ws.send(JSON.stringify(build_state_msg()));							//tell client our app state
	});

	// --- Send To All Connected Clients --- //
	wss.broadcast = function broadcast(data) {
		var i = 0;
		wss.clients.forEach(function each(client) {
			try {
				logger.debug('[ws] broadcasting to clients. ', (++i), data.msg);
				client.send(JSON.stringify(data));
			}
			catch (e) {
				logger.debug('[ws] error broadcast ws', e);
			}
		});
	};
}