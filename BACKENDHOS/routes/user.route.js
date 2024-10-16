const express = require('express');
const router = express.Router();

const {signup, signin, fetchEmail} = require("../Controller/user.controller")

router.post("/signin", signin)
router.post("/signup", signup)
router.get("/getemail", fetchEmail)


module.exports = router