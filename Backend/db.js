const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'zalatar5689',
    host: 'localhost',
    port: 5432,
    database: "Budget"
})

module.exports = pool;