import { response } from "express";
import { dataTask, db } from "../models/models.mjs";

/**
 * Adds the data receive to the array messagesDtata.
 * @param {*} req 
 * @param {*} res 
 */
export function pushingTaskControler(req, res) {
    try {
        const { description, done} = req.body;
        const sql = `INSERT INTO task(description, done)
                     VALUES ("${description}", ${done})`;
        db.run(sql, (err)=>{
            if (err){
                console.error(err);
                response.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }   
}
/**
 * Responds with the task in database. 
 * @param {*} req 
 * @param {*} res 
 */
export function getControler (req, res) {
    const sql = `SELECT id, description, done FROM tasks`
    db.all(sql, (err, data)=>{
        if (err) {
            console.error(err);
            response.sendStatus(500);
        } else {
            res.json(data);
        }
    });
}
/**
 * Edit a object for array of task. 
 * @param {*} req 
 * @param {*} res 
 */
export function putTaskControler (req, res) {
    const updateTask = req.body;
    const oldTask = dataTask.findIndex(
        item => item.id === updateTask.id
    )
    dataTask[oldTask] = updateTask;
    res.sendStatus(200)
}

export function deleteTaskControler(req, res){
    const deleteOrder = req.body;
    const taskToDelete = dataTask.findIndex(
        item => item.id === deleteOrder.id
    );
    dataTask.splice(taskToDelete, 1);
    res.sendStatus(200)
}