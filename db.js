const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "1212",
    database: "todo",
    host: "localhost",
    port: 5432,
});
module.exports = pool;