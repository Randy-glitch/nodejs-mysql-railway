import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'


const app = express()

app.get('/ping', async (req, res) => {
    const result = await pool.query(`select "Hola mundo" as result;`)
    console.log(result);
    res.json(result[0])
})
app.get('/create', async (req, res) => {
    const result = await pool.query(`insert into users(name) values ("Randy") `)
    res.json(result)
})
app.get('/', async (req, res) => {
    const [users] = await pool.query(`select * from users`)
    res.json(users)
})

app.listen(PORT)
console.log("Serve on port 3000");