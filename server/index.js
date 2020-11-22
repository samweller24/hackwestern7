const express = require('express')
const bodyParser = require('body-parser')


const arrayting = require('../utils/vectorGenerator')
const cos = require('../utils/cosineSimilarity')
const map = require('../utils/courseMap')
const map2 = require('../utils/otherMap')
const Vector = require('../server/models/vector')

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
        console.dir(data, {'maxArrayLength': null});
        var max = 0
        var score = 0
        otherRecords.forEach(element => {
            if(cos(data,element)> max){
                max = element
                score = cos(data,element)
            }
            
        });
        console.log('Highest Similarity of: '+score+' with record: ' + map.get(max.toString))

        // const myCourses = map2.get(map.get(data.toString).toString)
        //const theirCourses = map2.get(map.get(max.toString).toString)
        const myCourses = ['Bird Course #1','Databases','Operating Systems','Software Construction ','Linear Algebra','Discrete Math']
        const theirCourses =  ['Bird Course #2','Databases','Software Design','Software Construction ','Calc1000','Discrete Math']
        const recommend = []
        const same = []
        console.dir(data, {'maxArrayLength': null});
        console.dir(max, {'maxArrayLength': null});


        for (let index = 0; index < myCourses.length; index++) {
            var flag = false
            for (let i = 0; i < theirCourses.length; i++) {
               if( myCourses[index] == theirCourses[i])
               {
                 flag = true
               }
            }
            if(flag){
                same.push(myCourses[index])
            }else{
                recommend.push(myCourses[index])
            }
        }

        console.log('Same Courses: ' + same)
        console.log('Recommended Courses: ' + recommend)
        console.log('Sending to DB...')
        myFunction()



        function myFunction() {
            myVar = setTimeout(alertFunc, 3000);
        }
  
        function alertFunc() {
             console.log("Successfully Sent!");
        }

        app.post('/courses', async (req,res) => {
            const vector = new Vector('{ vector: ' +recommend+'}')
            try {
                await vector.save()
                res.status(201).send()
            }catch(e){
                res.status(500).send(e)
            }
        })
    })
})(params, otherRecords)


app.listen(port, () => console.log(`Server runnning on port ${port}`))