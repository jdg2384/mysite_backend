const express =require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('./knex')
const path = require('path');
var cors = require('cors')
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Get all route
app.get('/api', (req, res, next) => {
    knex('personal')
    .select('*')
    .then(data=>{
        res.send(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
})
// Get One Route
app.get('/api/:id', (req, res, next) => {
    let id = req.params.id
    knex('personal')
    .where('id',id)
    .select('*')
    .then(data=>{
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})
//Resume Click Routes

app.get('/clicks', (req, res, next) => {
    knex('resume')
    .select('*')
    .then(data=>{
        res.send(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

app.post('/resume',(req,res,next)=>{
    let rb = req.body.data
    console.log(rb)
    knex('resume')
    .insert({
        company: rb.company,
        submitted_time: rb.submitted_time,
        viewed_time: rb.viewed_time,
        link: rb.link,
        skills: rb.skills,
        skills_desired: rb.skills_desired,
        job_site: rb.job_site
    })
    .then(data => {
        res.status(200).send(data[0])
    }) 
    .catch(err => {
        res.status(404).send(err)
    })    
})

//Error
app.use((err, req, res, next) => {
    const status = err.status || 404
    res.status(status).json({ error: err })
})
  
app.use((req, res, next) => {
    res.status(404).json({ error: { status: 404, message: 'Not found' }})
})

const listener = () => console.log( `Listening on port ${port}!`)
app.listen(port, listener)
    