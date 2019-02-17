let ws = {};
$(document).ready(function () {
	connect_to_server();
	$('#command').click(function(){
		console.log("hhhh");
		console.log('----------command from user-------------');
		let obj = 	{
						type: 'user_command',
						command: 'leave to be continue'
				};
		if(obj.command){
			ws.send(JSON.stringify(obj));
		}
		return false;
	});
});