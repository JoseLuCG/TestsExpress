import express from "express";

const app = express();
const PORT = 3000;
const PATH_PREFIX = "/api/v0.0";
const jsonParser = express.json();


const messages = [];


try {
    app.get("/messages/", (req, res)=>{
        res.send(messages);
    });
    app.post("/message/", jsonParser , (req, res)=> {
        try {
            messages.push(req.body);
            res.sendStatus(201); 
        } catch (err) {
            console.error(err);
            res.sendStatus(500);
        }

    });
    

    app.listen(PORT, ()=>{
        console.log("Express Runing...");
    });
} catch (err) {
    console.log(err);
}
