//importing all the nesscary libraries
let express = require('express')
let States = require('../models').States
let router = express.Router()
//return a get response on the /states link with all the states
router.get('/states', function(req,res,next){
    States.findAll({order: ['name']}).then(states => {
        return res.json(states)
    })
    .catch(err => next.err())
})
//allows the db to be modified 
router.patch('/state/:name', function(req, res, next){
    States.update({visited: req.body.visited}, {where: {name: req.params.name}})
    .then(rows => {
        if(rows){
            return res.send('ok')
        }
        else{
            return res.status(404).send()
        }
    }).catch(err => next.err())
})
//this gets a specified pice of data based on the name params
router.get('/states/:name', function(req, res, next){
    States.findOne({where: {name: req.params.name}})
            .then(state => {
                if(state){
                    return res.json(state)
                }else{
                    return res.status(404).send()
                }
            }).catch(err => console.err())
})
module.exports = router