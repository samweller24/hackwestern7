const express = require('express')
const bodyParser = require('body-parser')


const arrayting = require('../utils/vectorGenerator')
const cos = require('../utils/cosineSimilarity')

require('../db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))
//app.use(cors())
app.use(bodyParser.json)

app.get('/', (req,res) => {
    res.send('Hello World')
})

const params = ['Actuarial Science','Software Engineering','Software Engineering','Software Engineering','Mathematics','Mathematics'];
const otherRecords = [
    0.007874015748031496, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
    0.015748031496062992, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
    0.023622047244094488, 0, 0,
                       0, 0, 0,
                       0, 0, 0,
                       0, 0, 0,0
  ];

(async function(params,otherRecords) {
    await arrayting(params).then(data => {
        console.log(cos(data,otherRecords))
        
    })
})(params, otherRecords)


app.listen(port, () => console.log(`Server runnning on port ${port}`))