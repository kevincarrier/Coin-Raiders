let wsTxt = '[ws]';

function connect_to_server(name,idx){
	let connected = false;
	connect();

	function connect() {
		var wsUri = null;
		if (document.location.protocol === 'https:') {
			wsTxt = '[wss]';
			wsUri = 'wss://' + document.location.hostname + ':' + document.location.port;
		} else {
			wsUri = 'ws://' + document.location.hostname + ':' + document.location.port;
		}
		console.log(wsTxt + ' Connecting to websocket', wsUri);

		ws = new WebSocket(wsUri);
		ws.onopen = function (evt) { onOpen(evt); };
		ws.onclose = function (evt) { onClose(evt); };
		ws.onmessage = function (evt) { onMessage(evt); };
		ws.onerror = function (evt) { onError(evt); };
	}

	function onOpen(evt) {
		console.log(wsTxt + ' CONNECTED');
		connected = true;
	}

	function onClose(evt) {
		console.log(wsTxt + ' DISCONNECTED', evt);
		connected = false;
		setTimeout(function () { connect(); }, 5000);					//try again one more time, server restarts are quick
	}

	function onError(evt) {
		console.log(wsTxt + ' ERROR ', evt);
	}

	function onMessage(msg){
		try{
			let msgObj = JSON.parse(msg.data);
			if(msgObj.msg === "backmessage"){
				console.log("Received");
				console.log(msgObj);
			}
			else if(msgObj.msg === "user_info"){
				console.log("Received");
				console.log(msgObj.data);//get all user name
			}
			else if(msgObj.msg === ""){

			}
			else if(msgObj.msg === ""){

			}
		}
		catch (e) {
			console.log(wsTxt + ' error handling a ws message', e);
		}
	} 
}