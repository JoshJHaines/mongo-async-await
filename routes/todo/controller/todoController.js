const Todo = require("../model/Todo");

async function fetchTodo(req, res){
    try {
        let fetchedTodo = await Todo.find(req.body);

        res.json({message: "success", fetchedTodo: payload});

    } catch(error){
        res.status(500).json({message: "you have failed", error: error.message})
    }
}

module.exports = {
    fetchTodo
}