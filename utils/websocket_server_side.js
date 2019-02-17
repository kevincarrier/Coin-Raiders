// ==================================
// Websocket Server Side Code 
// ==================================

module.exports = function (logger) {
	let ws_server = {};
	// process web socket messages
	ws_server.process_msg = function (ws, data) {
		
		if(data.type==="user_command"){

			if(data.command==="leave to be continue"){

				//sendMsg({msg: 'backmessage'});
				let updatemessage={msg: 'backmessage'};
				return updatemessage;
			}
			else if(data.command==="x"){
				
			}
			else if(data.command==="x"){
				
			}
			else if(data.command==="x"){
				
			}
			else if(data.command==="x"){
				
			}
			else if(data.command==="x"){
				
			}
		}
		else if(data.type==2){

		}
		else if(data.type==3){
			
		}
		else if(data.type==4){
			
		}
		else if(data.type==5){
			
		}
		else if(data.type==6){
			
		}
		
		// send transaction error msg 
		function send_err(msg, input) {
			sendMsg({ msg: 'tx_error', e: msg, input: input });
			sendMsg({ msg: 'tx_step', state: 'committing_failed' });
		}

		// send a message, socket might be closed...
		function sendMsg(json) {
			if (ws) {
				try {
					ws.send(JSON.stringify(json));
				}
				catch (e) {
					logger.debug('[ws error] could not send msg', e);
				}
			}
		}
	};

	return ws_server;
};