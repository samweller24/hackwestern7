var csv = require('fast-csv')
var results = [];
const userCourseVector = [];

function initCourseArray(courseList){
    csv.parseFile('course.csv')
  .on('data', (data) => {
      for (let index = 0; index < data.length; index++) {
          results[index] = data[index];
      }
      console.log(results, results.length)
      })
  .on('end', () => {
      console.log('Parsing Complete') 
      initUserVector(courseList) 
     
    });
}

function initUserVector(courseList){
    
    for (let index = 0; index < results.length; index++) {
        userCourseVector[index] = 0
    }
    console.log('User Array Created')
    buildCourseVector(courseList)
    
}

function buildCourseVector(courseList){
    courseList.forEach(element => {
        for (let index = 0; index < results.length; index++) {
            if(element == results[index]){
                userCourseVector[index] = userCourseVector[index] + 1
            }

        }
    });

    vectorize(userCourseVector)
}

function vectorize(userCourseVector){
    for (let index = 0; index < userCourseVector.length; index++) {
        userCourseVector[index] = userCourseVector[index]/userCourseVector.length % 3
    }
    console.log(userCourseVector)
}

 async function generateVector(courseList) {
    initCourseArray(courseList)
    
}



module.exports = generateVector