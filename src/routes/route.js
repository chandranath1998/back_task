const express = require('express');
const router = express.Router();

const {createUser, login} = require("../controller/userController");


router.post("/createUser", createUser);
router.post("/login", login)

module.exports = router