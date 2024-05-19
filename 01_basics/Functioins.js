// const user = {
//     username: "rohit",
//     price: 900
// }

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
// }

// handleObject(user)

// const arr = [1,2,3,4,5]

// function digi(arrays){
//     console.log(arrays[1]);
// }

// digi(arr)



//NESTED FUNCTION EXPLAINING GLOBAL AND LOCAL SCOPES

// function one(){
//     const name = "Rohit"
//     function two(){
//         const website = "Youtube"
//         console.log(name);
//     }
//     // console.log(website); WILL GIVE ERROR
//     two()
// }
// one();



one(5)
function one(num){
    console.log(num+1);
}


const two = function(...nums){
    console.log(...nums+1);
}

two(6,7,8,9)
