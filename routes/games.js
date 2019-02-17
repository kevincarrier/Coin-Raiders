const express = require("express");
const router = express.Router();
let playerlist={};
const cookieParser = require("cookie-parser");
let indexlist={};

function check(playerlist,playername){
	if(!playerlist[playername])playerlist[playername]=playername;
	else return false;
	return true;
}

router.get("/",async(req,res)=>{
	try{
		res.render("../public/page");
		// if(req.cookies && req.cookies.AuthCookie){
		// 	res.redirect("/game");
		// }
		// else{
		// 	res.render("../public/page");
		// //res.render() page for enter user name
		// }
	}
	catch(e){
		res.status(500).json({ error: e });
	}
});
//
router.post("/",async(req,res)=>{
	try{
		let playername = req.body["playername"];
		let index = req.body["teamnumber"];
		console.log("login board"); 
		console.log(playername);
		console.log(index);
		if(check(playerlist,playername)&&(index=='1'||index=='2'||index=='3'||index=='0')){
			// res.cookie("AuthCookie", playername, { expires: new Date(Date.now() + 900000) });
			// console.log("login",res.cookies);
			//res.render() page for game
			res.redirect("/game?name="+playername+"&idx="+index);
		} 
		else res.send("Player name occpuied or wrong index number");
	}
	catch(e){
		res.status(500).json({ error: e });
	}
});

router.get("/game",async(req,res)=>{
	try{
		let playername = req.query.name;
		let index = req.query.idx;
		console.log("game board"); 
		console.log(playername);
		console.log(index);
		res.render("../public/game",{playername:playername,idx:index});
		// if(req.cookies && req.cookies.AuthCookie){
			
		// 	//res.render() page for game
		// }
		// else{
		// 	res.redirect("/");
			
		// }
	}
	catch(e){
		res.status(500).json({ error: e });
	}
});

module.exports = router;