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
	console.log(req.cookies);
	try{
		if(req.cookies && req.cookies.AuthCookie){
			res.redirect("/game");
		}
		else{
			res.render("../public/page");
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
		console.log(playername);
		if(check(playerlist,playername)){
			res.cookie("AuthCookie", playername, { expires: new Date(Date.now() + 900000) });
			console.log("login",res.cookies);
			//res.render() page for game
			res.redirect("/game");
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
			res.render("../public/game");
			//res.render() page for game
		}
		else{
			res.redirect("/");
			
		}
	}
	catch(e){
		res.status(500).json({ error: e });
	}
});

module.exports = router;