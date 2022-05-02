import { validate } from "jsonschema";

/**
 * The function that made functions for validate the data of objects for new task, the task, delete task.
 * @param {schema} schema - the schema at validate. 
 * @returns - The function that you need in each endpoint.
 */
export function validatorFactory (schema) {
    return function JSONValidator ( req, res, next) {
        try {
            const validator = validate(req.body, schema)
            if (validator.valid) {
                next();
            } else {
                res.status(400);
                res.send("Invalid task data provided");
                console.error("Invalid task data provider");
            }
        } catch (err) {
            throw "Error validating data"
        }
    }
}