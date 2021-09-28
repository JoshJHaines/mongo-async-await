var express = require("express");
var router = express.Router();

const { fetchTodo } = require("./controller/todoController")

/* GET home page. */
router.get("/", fetchTodo)

module.exports = router;
