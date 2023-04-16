const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: '94258947',
    host: 'localhost',
    port: 5432,
    database: "Budget"
})

module.exports = pool;