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
        console.log('element: ' + element)
        console.log('reslts' + results[0])
        for (let index = 0; index < results.length; index++) {
            if(element == results[index]){
                userCourseVector[index] = userCourseVector[index] + 1
            }

        }
    });

    console.log('Course Vector: ' + userCourseVector)

}


 function generateVector(courseList) {
    initCourseArray(courseList)
}



module.exports = generateVector