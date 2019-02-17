let ws = {};
$(document).ready(function () {
	$('#command').hide();
	$('#playername').hide();
	$('#idx').hide();
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

	$('#start').click(function(){
		let name=document.getElementById("playername").innerHTML;
		let idx=document.getElementById("idx").innerHTML;
		console.log("login board",name,idx);
		console.log('----------command from user-------------');
		let obj = 	{
						type: 'user_info_req',
						name: name,
						idx:idx
				};
		console.log(obj);
		if(obj.name){
			ws.send(JSON.stringify(obj));
			$('#start').hide();
			$('#command').show();
		}
		return false;
	});
});