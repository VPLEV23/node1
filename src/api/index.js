const Router = require("express");
const equationRouter = require("./equation");

const apiRouter = new Router();

apiRouter.use("/equation", equationRouter);

module.exports = apiRouter;
