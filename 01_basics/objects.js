const tinderUser = {}

tinderUser.id = "123abc0"
tinderUser.name = "Rohit"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const normalUser = {
    email: "rohitbhatt3241@gmail.com",
    fullName: {
        userFullName: {
            firstName : "rohit",
            lastName : "Bhatt"
        }

    }
}

// console.log(normalUser.fullName.userFullName.firstName);



const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);


const course = {
    courseName: "JS with US", 
    coursePrice: 999,
    courseInstructor: "Rohit Bhatt"
}

// console.log(course.courseName)

const {courseInstructor} = course
console.log(courseInstructor);



