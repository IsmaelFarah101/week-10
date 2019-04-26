//importing all nessacary libraries
let express = require('express')
let bodyParser = require('body-parser')
let states_api = require("./routes/states.js")
let path = require('path')
let app = express()
//this part is used in deployment
app.use(express.static(path.join(__dirname,'client','dist')))

app.use(bodyParser.json())
//setting up the api
app.use('/api',states_api)

//incase of errors some responses
app.use(function(req, res, next){
    res.status(404).send('Server Error')
})
app.use(function(err, req, res, next){
    console.error(err.stack)
    res.status(500).send('Server error')
})
//run the server on port 3000
let server = app.listen(process.env.PORT || 3000, function(){
    console.log('app running on port', server.address().port)
})