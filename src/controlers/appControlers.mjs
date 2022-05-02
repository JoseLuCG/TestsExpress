import { dataTask } from "../models/models.mjs";

/**
 * Adds the data receive to the array messagesDtata.
 * @param {*} req 
 * @param {*} res 
 */
export function pushingTaskControler(req, res) {
    try {
        dataTask.push(req.body);
        res.sendStatus(201); 
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }   
}
/**
 * Responds with the array of tasks. 
 * @param {*} req 
 * @param {*} res 
 */
export function getControler (req, res) {
    res.send(dataTask);
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