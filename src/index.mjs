import express from "express";
import { getControler, pushingMessagesControler, putTaskControler, deleteTaskControler } from "./controlers/appControlers.mjs";

const app = express();
const PORT = 3000;
const PATH_PREFIX = "/api/v0.0";
const jsonParser = express.json();





try {
    app.get("/tasks/", getControler);
    app.post("/task/", jsonParser , pushingMessagesControler);
    app.put("/task/", jsonParser, putTaskControler);
    app.delete("/task/", jsonParser, deleteTaskControler);

    app.listen(PORT, ()=>{
        console.log("Express Runing...");
    });
} catch (err) {
    console.log(err);
}
