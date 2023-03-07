const student = {
    name:"suresh",
    age : 15,
    gender : "male",
    class : 10
}
//for in loop
for (var key in student) {
    console.log(key+":"+student[key])
}
//for of loop
for (var key of Object.keys(student)) {
    console.log(key+":"+student[key]);
  }

const array = Object.entries(student)
for(var [key,value] of array) {
    console.log(key+";"+value)
}


//for loop
const arr = Object.entries(student);
for(let i=0;i<arr.length;i++){
    console.log(arr[i][0]+":"+arr[i][1])
}

const arr1 = Object.keys(student);
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]+":"+student[arr1[i]])
}
