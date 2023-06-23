let p1 = new Promise((resolve, reject) => {
        console.log("Promise is pending")
        setTimeout(() => {
                // console.log("I am a promise and I am resolved")
                resolve(true)
        }, 5000)
})

let p2 = new Promise((resolve, reject) => {
        console.log("Promise is pending")
        setTimeout(() => {
                // console.log("I am a promise and I am rejected")
                reject(new Error("I am an error"))
        }, 5000)
})

// To get the value
p1.then((value) => {
        console.log(value)
})

// To catch the errors
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// })

p2.then((value)=>{
        console.log(value) 
},(error)=>{
        console.log(error)
})