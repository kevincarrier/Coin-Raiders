const gamesRoutes = require("./games");

const constructorMethod = app => {
  app.use("/",  gamesRoutes );
  
  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;