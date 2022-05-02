import express from "express";
import { getControler, pushingTaskControler, putTaskControler, deleteTaskControler } from "./controlers/appControlers.mjs";
import { validatorFactory } from "./middlewares/jsonValidator.mjs";
import { taskSchema, newTaskSchema, deleteTaskSchema } from "./schemas/taskSchema.mjs";

const app = express();
const PORT = 3000;
const PATH_PREFIX = "/api/v0.0";
const jsonParser = express.json();





try {
    app.get( "/tasks/", getControler );
    app.post( "/task/", jsonParser , validatorFactory(newTaskSchema) , pushingTaskControler );
    app.put( "/task/", jsonParser , validatorFactory(taskSchema) , putTaskControler );
    app.delete("/task/", jsonParser , validatorFactory(deleteTaskSchema) , deleteTaskControler );

    app.listen(PORT, ()=>{
        console.log("Express Runing...");
    });
} catch (err) {
    console.log(err);
}
