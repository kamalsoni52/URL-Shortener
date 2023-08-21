const express = require("express");
const { handleHomePage, handleRedirectURL } = require("../controllers/staticURL")

const staticRouter = express.Router();

staticRouter.get("/",handleHomePage)
staticRouter.get("/:id", handleRedirectURL);

module.exports = staticRouter;

