const express = require("express");
const router = express.Router();
const pool = require("/Users/abuhiujjwalpradan/Desktop/CH/db");
router.get("/todo", async(req, res) => {
    try {
        const allTodo = await pool.query("SELECT * FROM todo"); //http://localhost:5500/url/todo    //get funtion
        res.json(allTodo.rows);
        console.log("Gett all is working");
    } catch (err) {
        console.error(err.message);
    }
});

router.get("/todo/:id", async(req, res) => {
    const { id } = req.params; //http://localhost:5500/url/todo/3   // get by id
    try {
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id =$1", [id]);
        res.json(todo.rows[0]);
        console.log("get by id is also working");
    } catch (err) {
        console.error(err.message);
    }
});

router.post("/todo", async(req, res) => {
    try {
        const { description } = req.body; //http://localhost:5500/url/todo  // post to insert new data
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]
        );
        res.json(newTodo);
        console.log("inserting data is working");
    } catch (err) {
        console.error(err.message);
    }
});

router.put("/todo/:id", async(req, res) => {
    try {
        const { id } = req.params; //http://localhost:5500//urltodo/2      // put to update new data
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]
        );
        res.json("to do updated");
        console.log("update is working");
    } catch (err) {
        console.error(err.message);
    }
});

router.post("/todo/:id", async(req, res) => {
    try {
        const { id } = req.params; //http://localhost:5500/urltodo/1       // post function to delete by id
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
            id,
        ]);
        res.json("deleted");
        console.log("delete by id is working");
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;