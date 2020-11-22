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

const params = ['Statistical Sciences','Medical Health Informatics','Neuroscience','Kinesiology','Microbiology and Immunology','Medical Sciences'];
//const params = ['Rehabilitation Sciences','Physiology and Pharmacology','Physiology and Pharmacology','Microbiology and Immunology','Microbiology and Immunology','Medical Sciences'];
//const params = ['Actuarial Science','Software Engineering','Software Engineering','Software Engineering','Mathematics','Mathematics'];
//const params = ['Transitional Justice','Mathematics','Software Engineering','Software Engineering','Software Engineering','Mathematics'];
//const params = ['Mechatronic Systems Engineering','Hebrew','Hindu','World Literatures and Cultures','Mathematics','Theatre Studies'];
const otherRecords = require('../utils/otherRecords');

(async function(params,otherRecords) {
    await arrayting(params).then(data => {
        otherRecords.forEach(element => {
            console.log(cos(data,element))
        });
    })
})(params, otherRecords)


app.listen(port, () => console.log(`Server runnning on port ${port}`))