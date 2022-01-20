const { pool } = require("../db")


// return all todos
const get_todos =  async (req, res)  => { 
    try{
        const alltodos = await pool.query("SELECT * FROM todo")
        res.json(alltodos.rows)
    }catch(err){
        res.send(err);
    }
};

// save one todo 
const save_todos =  async function(req, res) {
    try{
        const todos = req.body
        const alltodos = await pool.query(
            "INSERT INTO todo VALUES ($1 , $2)",
        [todos.id , todos]
        )
        res.json("saved")
    }catch(err){
        res.send(err);
    }
}

const delete_todo =  async function(req, res) {
    try{
        const todos = req.body
        const alltodos = await pool.query(
            "DELETE FROM todo WHERE todo_id = ($1)",
            [todos.id]
        )
        res.json("deleted")
    }catch(err){
        res.send("error acurd");
    }
}

const put_todos =  async function(req, res) {
    try{
        const todos = req.body
        if(todos.status){
        const alltodos = await pool.query(
            "UPDATE todo SET data = jsonb_set(cast(data as jsonb), '{iscomplete}', 'true', true) WHERE todo_id = ($1);",
            [todos.id ]
        )
        }else{
            const alltodos = await pool.query(
                "UPDATE todo SET data = jsonb_set(cast(data as jsonb), '{iscomplete}', 'false', true) WHERE todo_id = ($1);",
                [todos.id ]
            )
        }
        res.json("completed")
    }catch(err){
        console.log(err)
    }
}



module.exports = {
    get_todos,
    save_todos,
    delete_todo,
    put_todos
};