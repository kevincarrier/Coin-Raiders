// ==================================
// Websocket Server Side Code 
// ==================================
let user_info_list=new Array();

function check(user_info_list,user){
	for (let i=0;i<user_info_list.length;++i){
		if (user_info_list[i].name === user.playername || user_info_list[i].idx===user.idx)return false;
	}
	return true;
}

module.exports = function (logger) {
	let ws_server = {};
	// process web socket messages
	ws_server.process_msg = function (ws, data) {
		console.log(data);
		let updatemessage;
		if(data.type==="user_command"){

			if(data.command){

				//sendMsg({msg: 'backmessage'});
				updatemessage={msg: 'backmessage',data:data.command};
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
		else if(data.type==='user_info_req'){
			let obj = 	{
						playername: data.name,
						idx:data.idx
			};
			if(check(user_info_list,obj))user_info_list.push(obj);
			console.log("user_info_req");
			console.log(user_info_list)
			updatemessage={msg: 'user_info',data:user_info_list};
			return updatemessage;
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