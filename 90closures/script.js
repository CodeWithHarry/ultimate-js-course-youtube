// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   name = "Harry"
//   return displayName;
// }
// let c = init();
// c()


function returnFunc() {
  const x = () => {
    let a = 1
    console.log(a)
    const y = () => {
      // let a = 2
      console.log(a)
      const z = () => {
        // let a = 3
        console.log(a)
      }
      z()
    }
    a = 999
    y()
  }
  return x
}

let a = returnFunc()
a()

