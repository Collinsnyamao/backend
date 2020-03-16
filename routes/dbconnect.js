const express = require('express');
const router = express.Router();


/*const { Pool, Client } = require('pg');
const pool = new Pool({
    user: 'collinsnyamao',
    host: 'localhost',
    database: 'template1',
    password: '',
    port: 5432,
});
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end()
});
const client = new Client({
    user: 'collinsnyamao',
    host: 'localhost',
    database: 'template1',
    password: '',
    port: 5432,
});
client.connect();
client.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    client.end()
});

const query = {
    text: 'INSERT INTO users(name, email) VALUES($1, $2)',
    values: ['brianc', 'brian.m.carlson@gmail.com'],
}*/

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
