export const newTaskSchema = {
    $id: "/newTask",
    type: "object",
    properties: {
        description: {
            description: "Task description",
            type: "string"
        },
        done: {
            description: "Task status",
            type: "boolean"
        }
    },
    additionalProperties: false
};