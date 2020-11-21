var csv = require('fast-csv')
const userCourseVector = []
const results = []


 function initCourseArray(courseList){
    return new Promise(function(resolve, reject) {
        csv.parseFile('course.csv')
        .on('data', (data) => {
            for (let index = 0; index < data.length; index++) {
                results[index] = data[index];
            }
            })
        .on('end', () => {
            resolve(results)
          })
    })


}

function initUserVector(){
    for (let index = 0; index < results.length; index++) {
        userCourseVector[index] = 0
    }
}

function buildCourseVector(courseList){
    courseList.forEach(element => {
        for (let index = 0; index < results.length; index++) {
            if(element == results[index]){
                userCourseVector[index] = userCourseVector[index] + 1
            }
        }
    })
}

function vectorize(){
    for (let index = 0; index < userCourseVector.length; index++) {
        userCourseVector[index] = userCourseVector[index]/userCourseVector.length % 3
    }

    return userCourseVector
}
   

async function generateVector(courseList) {
     return await initCourseArray(courseList).then(() => {
         initUserVector()
         buildCourseVector(courseList)
         return vectorize()
     })
    

}



module.exports = generateVector