import sqlite3 from "sqlite3";

export const db = new sqlite3.Database('./tasks.db', (err) => {
    if (err) {
        throw err.message;
    }
    console.log('Conected to the database.');
});

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        tasks (
            id INTEGER PRIMARY KEY,
            description VARCHAR(100) NOT NULL,
            done BOOLEAN DEFAULT false NOT NULL
        )
`);