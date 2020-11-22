const express = require('express')
const bodyParser = require('body-parser')


const arrayting = require('../utils/vectorGenerator')
const cos = require('../utils/cosineSimilarity')
const map = require('../utils/courseMap')
const map2 = require('../utils/otherMap')

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
const otherRecords = require('../utils/otherRecords');

(async function(params,otherRecords) {
    await arrayting(params).then(data => {
        var max = 0
        var score = 0
        otherRecords.forEach(element => {
            if(cos(data,element)> max){
                max = element
                score = cos(data,element)
            }
            
        });
        console.log('Highest Similarity: ' + score + ' with record: ' + map.get(max.toString))
        console.log('Suggested Courses: ' + map2.get(map.get(max.toString).toString))
    })
})(params, otherRecords)


app.listen(port, () => console.log(`Server runnning on port ${port}`))