const express = require("express");
const router = express.Router();
let playerlist={};
const cookieParser = require("cookie-parser");

function check(playerlist,playername){
	if(!playerlist[playername])playerlist[playername]=true;
	else return false;
	return true;
}

router.get("/",async(req,res)=>{
	try{
		if(req.cookies && req.cookies.AuthCookie){
			res.redirect("/game");
		}
		else{
			res.send("Login Game for Morgan");
		//res.render() page for enter user name
		}
	}
	catch(e){
		res.status(500).json({ error: e });
	}
});
//
router.post("/",async(req,res)=>{
	try{
		let playername = req.body["playername"];
		if(check(playerlist,playername)){
			res.cookie("AuthCookie", playername, { expires: new Date(Date.now() + 900000) });
			//res.render() page for game
			res.send("Welcome to Game for Morgan");
		} 
		else res.send("Player name occpuied");
	}
	catch(e){
		res.status(500).json({ error: e });
	}
});

router.get("/game",async(req,res)=>{
	try{
		if(req.cookies && req.cookies.AuthCookie){
			res.redirect("/");
		}
		else{
			res.send("welcome to game for morgan");
			//res.render() page for game
		}
	}
	catch(e){
		res.status(500).json({ error: e });
	}
});

module.exports = router;