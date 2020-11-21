const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const arrayting = require('../utils/vectorGenerator')

require('../db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))
//app.use(cors())
app.use(bodyParser.json)

app.get('/', (req,res) => {
    res.send('Hello World')
})

 arrayting(['Actuarial Science','Software Engineering','Software Engineering','Software Engineering','Mathematics','Mathematics'])
 




app.listen(port, () => console.log(`Server runnning on port ${port}`))