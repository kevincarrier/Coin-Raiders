let wsTxt = '[ws]';

function connect_to_server(){
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

		ws_c = new WebSocket(wsUri);
		ws_c.onopen = function (evt) { onOpen(evt); };
		ws_c.onclose = function (evt) { onClose(evt); };
		ws_c.onmessage = function (evt) { onMessage(evt); };
		ws_c.onerror = function (evt) { onError(evt); };
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
				console.log("Received user info");
				console.log(msgObj.data);//get all user name
				console.log(msgObj.data[0]);
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